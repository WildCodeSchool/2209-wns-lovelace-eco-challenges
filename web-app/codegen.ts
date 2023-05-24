
import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  overwrite: true,
  schema: "http://127.0.0.1:4000/",
  documents: "src/**/*.tsx",
  generates: {
    "src/src-frontend/gql/": {
      preset: "client",
      plugins: []
    }
  }
};

export default config;
