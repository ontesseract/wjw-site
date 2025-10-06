/* eslint-disable @typescript-eslint/no-explicit-any */
import { documentToString, getOperationName } from "@/graphql/graphql-utils";
import { TypedDocumentNode } from "@graphql-typed-document-node/core";
import type { DocumentNode, ExecutionResult, GraphQLError } from "graphql";
import { createClient, type Sink } from "graphql-ws";
import { Logger } from "@/lib/logger";

export type Fetch = typeof fetch;

export interface GraphQLRequestContext<V = any> {
  query: string | string[];
  variables?: V;
}

export interface GraphQLResponse<T = unknown> {
  data?: T;
  errors?: GraphQLError[];
  extensions?: unknown;
  status: number;
  [key: string]: unknown;
}

export type HTTPMethodInput = "GET" | "POST" | "get" | "post";

export interface RequestConfig extends Omit<RequestInit, "headers" | "method"> {
  fetch?: Fetch;
  method?: HTTPMethodInput;
  headers?: HeadersInit;
  requestMiddleware?: RequestMiddleware;
  responseMiddleware?: ResponseMiddleware;
  excludeOperationName?: boolean;
  onErrors?: (
    response: Response,
    body: GraphQLResponse,
    requestContext: GraphQLRequestContext
  ) => Promise<void>;
}

export type RequestDocument = string | DocumentNode;

export type RequestOptions = {
  requestHeaders?: HeadersInit;
  signal?: RequestInit["signal"];
};

export type ResponseMiddleware = (
  response: GraphQLClientResponse<unknown> | Error,
  request: RequestInitExtended
) => Promise<void>;

export type RequestMiddleware<V = any> = (
  request: RequestInitExtended<V>
) => RequestInitExtended | Promise<RequestInitExtended>;

export type RequestInitExtended<V = any> = RequestInit & {
  url: string;
  operationName?: string;
  variables?: V;
};

export interface GraphQLClientResponse<Data> {
  status: number;
  headers: Headers;
  data: Data;
  extensions?: unknown;
  errors?: GraphQLError[];
}

export class GraphQLDocumentController<TData = any, V = any> {
  private _headers?: Record<string, string>;
  private _signal?: AbortSignal;

  constructor(
    public readonly client: GraphQLClient,
    public readonly document: RequestDocument | TypedDocumentNode<TData, V>
  ) {}

  headers(headers: Record<string, string>) {
    this._headers = headers;
  }

  signal(signal: AbortSignal) {
    this._signal = signal;
  }

  send(variables?: V): Promise<TData> {
    return this.client.request<TData, V>(this.document, variables, {
      requestHeaders: this._headers,
      signal: this._signal,
    });
  }
}

export class GraphQLClient {
  readonly url: string;
  readonly wsUrl: string;
  readonly config?: RequestConfig;

  constructor(url: string, config?: RequestConfig) {
    this.url = url;
    this.wsUrl = url.replace("https://", "wss://").replace("http://", "ws://");
    this.config = config;
  }

  static withAdminSecret(url: string, secret: string): GraphQLClient {
    return new GraphQLClient(url, {
      headers: {
        "x-hasura-admin-secret": secret,
      },
    });
  }

  gql<TData = any, V = any>(
    document: RequestDocument | TypedDocumentNode<TData, V>
  ): GraphQLDocumentController<TData, V> {
    return new GraphQLDocumentController(this, document);
  }

  createRequest<TData = any, V = any>(
    document: RequestDocument | TypedDocumentNode<TData, V>,
    variables?: V,
    options?: RequestOptions,
    methodOverride?: string
  ): RequestInitExtended {
    return {
      url: this.url,
      method: methodOverride ?? this.config?.method ?? "POST",
      headers: options?.requestHeaders ?? this.config?.headers,
      body: JSON.stringify({
        query: documentToString(document),
        variables,
      }),
      variables,
      operationName: getOperationName(document),
      signal: options?.signal,
    };
  }

  async request<TData = any, V = any>(
    document: RequestDocument | TypedDocumentNode<TData, V>,
    variables?: V,
    options?: RequestOptions
  ): Promise<TData> {
    const request = this.createRequest(document, variables, options);

    try {
      await this.config?.requestMiddleware?.(request);
      const resolvedFetch = this.config?.fetch ?? fetch;
      const response = await resolvedFetch(this.url, request);
      if (!response.ok) {
        const body = await response.text();
        Logger.error(response.status, body);
        throw new Error("Unexpected response from GraphQL server");
      }

      const body = (await response.json()) as GraphQLResponse<TData>;
      if (body.errors) {
        if (this.config?.onErrors) {
          await this.config.onErrors(response, body, {
            query: documentToString(document),
            variables,
          });
        } else {
          Logger.debug(JSON.stringify(body.errors, null, 2));
          const message = extractGraphQLErrorMessages(body.errors);
          Logger.error(message);
          throw new Error(message);
        }
      }
      if (body.data) {
        await this.config?.responseMiddleware?.(
          { ...response, data: body.data },
          request
        );
        return body.data;
      }
      throw new Error("Unexpected response from GraphQL server");
    } catch (error) {
      if (error instanceof Error) {
        await this.config?.responseMiddleware?.(error, request);
      }
      throw error;
    }
  }

  subscribe<TData = any, V = any>(
    document: RequestDocument | TypedDocumentNode<TData, V>,
    variables: V,
    sink: Sink<ExecutionResult<TData>>,
    onUnexpectedClose?: (event: CloseEvent) => void
  ): () => void {
    // https://hasura.io/docs/latest/subscriptions/postgres/index/#communication-protocol
    const request = this.createRequest(document, variables, {}, "WS");
    const wsClient = createClient({
      url: this.wsUrl,
      connectionParams: {
        headers: request.headers,
      },
    });

    wsClient.on("closed", (event: unknown) => {
      // https://developer.mozilla.org/en-US/docs/Web/API/CloseEvent/CloseEvent
      if (event instanceof CloseEvent && !event.wasClean) {
        onUnexpectedClose?.(event);
      }
    });

    const asyncSubscription = async () => {
      try {
        await this.config?.requestMiddleware?.(request);
        wsClient.subscribe(
          {
            query: documentToString(document),
            variables: variables as Record<string, unknown>,
          },
          sink
        );
      } catch (error) {
        if (error instanceof Error) {
          await this.config?.responseMiddleware?.(error, request);
        }
        throw error;
      }
    };

    // kick off the subscription asynchronously
    asyncSubscription();
    // return disposable immediately
    return wsClient.dispose;
  }
}

export function extractGraphQLErrorMessages(errors: GraphQLError[]): string {
  function extractErrorMessage(error: GraphQLError): string {
    if (error.message) {
      return error.message;
    }
    return "Unknown error";
  }

  return errors.map(extractErrorMessage).join(" ");
}

export function loggingMiddleware(): RequestMiddleware {
  return async (request) => {
    const variables =
      typeof request.body === "string"
        ? JSON.parse(request.body).variables
        : {};
    const label = request.method === "WS" ? "subscription" : "graphql";
    Logger.debug(label, request.operationName, JSON.stringify(variables));
    return request;
  };
}
