const express = require('express');
const httpProxy = require('http-proxy');

const apiProxy = httpProxy.createProxyServer();
const app = express();
const port = 3010;

app.use(express.static('./public'));

app.get('/house_images', (req, res) => {
  apiProxy.web(req, res, { target: 'http://52.87.228.239:3003/' });
});

// app.get('/description', (req, res) => {
//   apiProxy.web(req, res, { target: 'http://18.188.174.153:3210/' });
// });

// app.get('/totalReviews', (req, res) => {
//   apiProxy.web(req, res, { target: 'http://52.10.65.36/' });
// });

// app.get('/moreHomes', (req, res) => {
//   apiProxy.web(req, res, { target: 'http://52.27.3.181:3000/' });
// });

const server = app.listen(port, () => console.log(`Listening on port ${port}`));

module.exports = server;
