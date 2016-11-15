const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../../app');
const expect = chai.expect;

chai.use(chaiHttp);

describe('Posts Controller', () => {
  it('should list ALL posts on /posts GET', (done) => {
    chai.request(app)
      .get('/posts')
      .end((err,res) => {
        expect(res.status).to.equal(200);
        //expect(res.text).to.include('Post');
      });
  });
  it('should list a SINGLE post on /posts/:title GET', (done) => {
    chai.request(app)
      .get('/posts/blah')
      .end((err,res) => {
        expect(res.status).to.equal(200);
        expect(res).to.be.html;
        expect(res.text).to.include(' post: ');
        done();
      });
    });
  it('should add a SINGLE post on /posts POST');
  it('should update a SINGLE post on /posts/:title PUT');
  it('should delete a SINGLE post on /posts/:title DELETE');
});
