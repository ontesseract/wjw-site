import GraphQLClient from "./graphql-client";

export * from "./generated/gql";
export * from "./generated/graphql";

const graphqlUrl =
  process.env.NEXT_PUBLIC_GRAPHQL_URL || "http://localhost:8080/v1/graphql";
export const publicClient = new GraphQLClient(graphqlUrl, {
  headers: {
    "x-hasura-tenant-id": process.env.NEXT_PUBLIC_TENANT_ID || "pgshow",
  },
});
