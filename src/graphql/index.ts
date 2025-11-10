import { GraphQLClient } from "./graphql-client";

export * from "./generated/gql";
export * from "./generated/graphql";

const graphqlUrl = process.env.NEXT_PUBLIC_GRAPHQL_URL ?? "";
const tenantId = process.env.NEXT_PUBLIC_TENANT_ID ?? "";

export type Options = {
  cache?: RequestCache;
};

export function client(
  url: string,
  headers: Record<string, string>,
  options?: Options
) {
  return new GraphQLClient(url, {
    headers,
    cache: options?.cache,
  });

  // TODO: remove graffle and add middleware logging
}

export function publicClient(options?: Options) {
  return client(graphqlUrl, { "x-hasura-tenant-id": tenantId }, options);
}
