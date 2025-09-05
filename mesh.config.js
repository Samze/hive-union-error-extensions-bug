import { defineConfig } from '@graphql-mesh/compose-cli';
import { loadOpenAPISubgraph } from '@omnigraph/openapi';

export const composeConfig = defineConfig({
  subgraphs: [
    {
      sourceHandler: loadOpenAPISubgraph('SimpleAPI', {
        source: './openapi.yaml',
        endpoint: 'http://localhost:3000',
        ignoreErrorResponses: true,
      })
    }
  ]
});
