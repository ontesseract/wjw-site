import GraphQLClient from "./graphql-client";

export * from "./generated/gql";
export * from "./generated/graphql";

const graphqlUrl = process.env.NEXT_PUBLIC_GRAPHQL_URL ?? "";
export const publicClient = new GraphQLClient(graphqlUrl, {
  headers: {
    "x-hasura-tenant-id": process.env.NEXT_PUBLIC_TENANT_ID ?? "",
  },
});
