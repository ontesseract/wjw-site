import { type ExecutionResult, print } from "graphql";
import { createClient, type Sink } from "graphql-ws";

import type {
  GraphQLResponse,
  RequestConfig,
  RequestInitExtended,
  RequestOptions,
  SubscriptionOptions,
  Variables,
} from "@/graphql/graphql-client-types";

import { getOperationName } from "./graphql-utils";

export default class GraphQLClient {
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

  createRequest<TData, V extends Variables = Variables>(
    options: RequestOptions<TData, V>,
    methodOverride?: string
  ): RequestInitExtended {
    return {
      url: this.url,
      method: methodOverride ?? this.config?.method ?? "POST",
      headers: options.requestHeaders ?? this.config?.headers,
      body: JSON.stringify({
        query: print(options.document),
        variables: options.variables,
      }),
      variables: options.variables,
      operationName: getOperationName(options.document),
      signal: options.signal,
    };
  }

  subscribe<TData, V extends Variables = Variables>(
    options: SubscriptionOptions<V>,
    sink: Sink<ExecutionResult<TData>>,
    onUnexpectedClose?: (event: CloseEvent) => void
  ): () => void {
    // https://hasura.io/docs/latest/subscriptions/postgres/index/#communication-protocol
    const request = this.createRequest(options, "WS");
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
            query: print(options.document),
            variables: options.variables,
          },
          sink
        );
      } catch (error) {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        await this.config?.responseMiddleware?.(error as any, request);

        throw error;
      }
    };

    // kick off the subscription asynchronously
    asyncSubscription();
    // return disposable immediately
    return wsClient.dispose;
  }

  async request<Data, V extends Variables = Variables>(
    options: RequestOptions<Data, V>
  ): Promise<Data | undefined> {
    const requestContext = {
      query: print(options.document),
      variables: options.variables,
    };

    const request = this.createRequest(options);

    try {
      await this.config?.requestMiddleware?.(request);
      const resolvedFetch = this.config?.fetch ?? fetch;
      const response = await resolvedFetch(this.url, request);
      if (!response.ok) {
        // Hasura did not return a 200, something weird happened
        throw new Error(
          JSON.stringify({
            status: response.status,
            headers: response.headers,
            requestContext,
          })
        );
      }

      const body = await response.json<GraphQLResponse<Data>>();
      if (body.errors) {
        throw new Error(
          JSON.stringify({
            headers: response.headers,
            ...body,
          })
        );
      }
      // Error Free: Direct hasura query or mutation or action
      if (body.data) {
        await this.config?.responseMiddleware?.(
          { ...response, data: body.data },
          request
        );
      }
      return body.data;
    } catch (error) {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      await this.config?.responseMiddleware?.(error as any, request);
      throw error;
    }
  }
}
