import type { CodegenConfig } from "@graphql-codegen/cli";
import { loadEnvConfig } from "@next/env";

const projectDir = process.cwd();
loadEnvConfig(projectDir);

function schemaConfig(role?: string) {
  const headers: Record<string, string> = {};
  if (process.env.HASURA_GRAPHQL_ADMIN_SECRET) {
    headers["x-hasura-admin-secret"] = process.env
      .HASURA_GRAPHQL_ADMIN_SECRET as string;
  }
  if (role) {
    headers["x-hasura-role"] = role;
  }
  if (process.env.NEXT_PUBLIC_TENANT_ID) {
    headers["x-hasura-tenant-id"] = process.env.NEXT_PUBLIC_TENANT_ID;
  }
  return {
    [process.env.NEXT_PUBLIC_GRAPHQL_URL ?? "http://localhost:8080/v1/graphql"]:
      {
        headers,
      },
  };
}

const hasuraScalars = {
  citext: { input: "string", output: "string" },
  date: { input: "string", output: "string" },
  jsonb: { input: "Record<string, any>", output: "Record<string, any>" },
  numeric: { input: "number", output: "number" },
  timestamptz: { input: "string", output: "string" },
  timetz: { input: "string", output: "string" },
  uuid: { input: "string", output: "string" },
};

const config: CodegenConfig = {
  schema: [schemaConfig("public")],
  documents: ["src/**/*.ts*"],
  ignoreNoDocuments: true,
  generates: {
    "./src/graphql/generated/": {
      preset: "client",
      presetConfig: {
        fragmentMasking: false,
      },
      config: {
        scalars: hasuraScalars,
        strictScalars: true,
      },
    },
    "./src/graphql/generated/schema.graphql": {
      plugins: ["schema-ast"],
      config: {
        includeDirectives: true,
      },
    },
  },
};

export default config;
