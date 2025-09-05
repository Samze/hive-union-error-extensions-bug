# hive-union-error-extensions-bug

To reproduce, clone this repo.

```bash
make install
make start
```

```bash
curl -X POST http://localhost:4000/graphql \
  -H "Content-Type: application/json" \
  -d '{
    "query": "query GetData { 
      getUser { id name email } 
      getData { 
        ... on UserResponse { name } 
        ... on OrderResponse { orderId } 
      } 
    }"
  }'
```