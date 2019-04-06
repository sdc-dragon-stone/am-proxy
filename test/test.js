const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../server');

chai.use(chaiHttp);
chai.should();

describe('Proxy Server', () => {
  it('should return status 200 from GET /', (done) => {
    chai.request(app)
      .get('/')
      .end((err, res) => {
        res.should.have.status(200);
        done();
      });
  });

  it('should not return 404 status from GET /', (done) => {
    chai.request(app)
      .get('/')
      .end((err, res) => {
        res.should.not.have.status(404);
        done();
      });
  });

  it('should return status 404 from nonexistent paths', (done) => {
    chai.request(app)
      .get('/freehouse')
      .end((err, res) => {
        res.should.have.status(404);
        done();
      });
  });
});
