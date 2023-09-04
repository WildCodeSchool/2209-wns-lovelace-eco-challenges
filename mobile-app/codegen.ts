
import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  overwrite: true,
  schema: "http://127.0.0.1:4000",
  documents: "**/*.tsx",
  generates: {
    "gql/": {
      preset: "client",
      plugins: []
    }
  }
};

export default config;
