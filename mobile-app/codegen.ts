import type { CodegenConfig } from '@graphql-codegen/cli'
 
const config: CodegenConfig = {
   schema: 'http://localhost:4000',
   documents: ['src/**/*.tsx'],
   generates: {
      './src/gql/': {
        preset: 'client',
        plugins: []
      }
   }
}
export default config