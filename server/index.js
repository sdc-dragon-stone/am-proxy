require('newrelic');
const express = require('express');
const httpProxy = require('http-proxy');
const proxy = require('http-proxy-middleware');
const apiProxy = httpProxy.createProxyServer();
const app = express();
const port = 3010;

app.use(express.static('./public'));
app.use('/:id', express.static('./public'));

app.use(
  '/totalReviews/:id',
  proxy({
    target: process.env.Review || 'http://localhost:3004',
    changeOrigin: true
  })
)
app.use(
  '/createOne',
  proxy({
    target: process.env.Review || 'http://localhost:3004',
    changeOrigin: true
  })
)
app.use(
  '/updateOne/:id',
  proxy({
    target: process.env.Review || 'http://localhost:3004',
    changeOrigin: true
  })
)
app.use(
  '/readOne/:id',
  proxy({
    target: process.env.Review || 'http://localhost:3004',
    changeOrigin: true
  })
)

app.use(
  '/deleteOne/:id',
  proxy({
    target: process.env.Review || 'http://localhost:3004',
    changeOrigin: true
  })
)

// app.get('/house_images', (req, res) => {
//   apiProxy.web(req, res, { target: 'http://52.87.228.239:3003/' });
// });

// app.get('/description', (req, res) => {
//   apiProxy.web(req, res, { target: 'http://18.188.174.153:3210/' });
// });

// app.get('/totalReviews:id', (req, res) => {
//   apiProxy.web(req, res, { target: 'http://localhost:3004' });
// });

// app.get('/moreHomes', (req, res) => {
//   apiProxy.web(req, res, { target: 'http://52.27.3.181:3000/' });
// });



const server = app.listen(port, () => console.log(`Listening on port ${port}`));

module.exports = server;
