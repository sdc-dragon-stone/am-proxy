const express = require('express');
const httpProxy = require('http-proxy');

const apiProxy = httpProxy.createProxyServer();
const app = express();
const port = 3010;

app.use(express.static('./public'));

app.get('/description', (req, res) => {
  apiProxy.web(req, res, { target: 'http://localhost:3210' });
});

app.get('/totalReviews', (req, res) => {
  apiProxy.web(req, res, { target: 'http://localhost:3004' });
});

app.get('/totalReviews', (req, res) => {
  apiProxy.web(req, res, { target: 'http://localhost:3004' });
});

app.get('/moreHomes', (req, res) => {
  apiProxy.web(req, res, { target: 'http://localhost:3000' });
});

const server = app.listen(port, () => console.log(`Listening on port ${port}`));

module.exports = server;
