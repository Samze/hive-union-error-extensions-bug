import express from 'express';
import { createYoga } from 'graphql-yoga';
import gateway from './gateway.config.js';

async function startServer() {
  const app = express();
  
  const yoga = createYoga({
    schema: gateway.supergraph,
    graphiql: {
      defaultQuery: /* GraphQL */ `
        query GetData {
          getUser {
              id
              name
              email
          }
          
          getData {
            ... on UserResponse {
              name
            }
            ... on OrderResponse {
              orderId
            }
          }
        }
      
      `,
    },
    plugins: gateway.plugins
  });

  // Mount GraphQL endpoint
  app.use('/graphql', yoga);

  const port = 4000;
  app.listen(port, () => {
    console.log(`Hive Gateway GraphQL server running at http://localhost:${port}/graphql`);
  });
}

// Handle errors
startServer().catch((error) => {
  console.error('Failed to start server:', error);
  process.exit(1);
});
