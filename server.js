import express from 'express';
const app = express();
const port = 3000;

app.use(express.json());

// Implement the /data endpoint according to our OpenAPI spec
app.get('/data', (req, res) => {
  res.status(400).json({
    error: "Bad request",
    code: 400
  });
  return;
});

// Implement the /user endpoint - always returns 200 with UserResponse
app.get('/user', (req, res) => {
  res.status(400).json({
    error: "Bad request",
    code: 400
  });
  return;
});

// Error handling
app.use((err, req, res, next) => {
  res.status(400).json({
    error: "Bad request",
    code: 400
  });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});

export default app;
