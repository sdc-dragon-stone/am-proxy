const express = require('express');

const app = express();
const port = 3010;

app.use(express.static('./public'));

const randNum = () => {
  return Math.floor(Math.random() * Math.floor(100));
};

app.get('/', (req, res) => {
  res.status(200).send('This is the proxy server!');
});

const server = app.listen(port, () => console.log(`Listening on port ${port}`));

module.exports = server;
