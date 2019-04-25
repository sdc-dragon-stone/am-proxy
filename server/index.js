const express = require('express');
const httpProxy = require('http-proxy');

const apiProxy = httpProxy.createProxyServer();
const app = express();
const port = 3010;

app.use(express.static('./public'));

app.get('/house_images', (req, res) => {
  apiProxy.web(req, res, { target: 'http://ec2-54-175-40-167.compute-1.amazonaws.com:3003/' });
});

app.get('/description', (req, res) => {
  apiProxy.web(req, res, { target: 'http://18.220.111.23:3210/' });
});

// app.get('/totalReviews', (req, res) => {
//   apiProxy.web(req, res, { target: 'http://reviews.pfuzgfpajh.us-west-2.elasticbeanstalk.com/' });
// });

app.get('/moreHomes', (req, res) => {
  apiProxy.web(req, res, { target: 'http://52.88.112.117:3000/' });
});

const server = app.listen(port, () => console.log(`Listening on port ${port}`));

module.exports = server;
