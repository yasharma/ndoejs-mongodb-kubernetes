const express = require('express');
const app = express();
const port = 3000;

const func = (req, res) => {
  res.json('Success!')
};

app.get('/', func);
app.get('/healthcheck', func);

app.listen(port, () => {
  console.log(`
    🚀  Server is running!
    🔉  Listening on port ${port}
    📭  Click here http://localhost:${port}
  `);
});