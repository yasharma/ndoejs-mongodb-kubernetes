const express = require('express');
const app = express();
const port = process.env.PORT;
const { setupDB } = require('./db');

setupDB(v => console.log(v));

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