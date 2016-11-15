const chai = require('chai');
const chaiHTTP = require('chai-http');
const expect = chai.expect;
const models = require('../../models');

chai.use(chaiHTTP);

describe('User Model: ', () => {
  before( (done) => {
    models.User.sync({ force : true })
    .then( () => {
      done(null);
    })
    .catch( (err) => {
      done(err);
    })
  })
});
describe('User model properties check', () => {
it('Should contain a first_name property', (done) => {
  const a1 = models.User.build();
  expect(a1).to.have.property('first_name');
  done();
});

it('Should contain a last_name property', (done) => {
  const a1 = models.User.build();
  expect(a1).to.have.property('last_name');
  done();
});

it('Should contain a username property', (done) => {
  const a1 = models.User.build();
  expect(a1).to.have.property('username');
  done();
});

it('Should contain a password property', (done) => {
  const a1 = models.User.build();
  expect(a1).to.have.property('password');
  done();
});

it('Should contain a email property', (done) => {
  const a1 = models.User.build();
  expect(a1).to.have.property('email');
  done();
});
});
describe('User Model creation check', () => {
  it('Should not create when missing all fields', (done) => {
    models.User.create({
    })
    .then( () => {
      done('Failed');
    })
    .catch( (err) => {
      done();
    })
  });
  it('Should not create when missing first_name fields', (done) => {
    models.User.create({
      //first_name: 'Neo',
      last_name: 'Anderson',
      username: 'th30ne',
      password: 'Matrix2001',
      email: 'nAnderson@yahoo.com'
    })
    .then( () => {
      done('Failed');
    })
    .catch( (err) => {
      done();
    })
  });
  it('Should not create when missing last_name fields', (done) => {
    models.User.create({
      first_name: 'Neo',
      //last_name: 'Anderson',
      username: 'th30ne',
      password: 'Matrix2001',
      email: 'nAnderson@yahoo.com'
    })
    .then( () => {
      done('Failed');
    })
    .catch( (err) => {
      done();
    })
  });
  it('Should not create when missing username fields', (done) => {
    models.User.create({
      first_name: 'Neo',
      last_name: 'Anderson',
      //username: 'th30ne',
      password: 'Matrix2001',
      email: 'nAnderson@yahoo.com'
    })
    .then( () => {
      done('Failed');
    })
    .catch( (err) => {
      done();
    })
  });
  it('Should not create when missing password fields', (done) => {
    models.User.create({
      first_name: 'Neo',
      last_name: 'Anderson',
      username: 'th30ne',
      //password: 'Matrix2001',
      email: 'nAnderson@yahoo.com'
    })
    .then( () => {
      done('Failed');
    })
    .catch( (err) => {
      done();
    })
  });
  it('Should not create when missing email fields', (done) => {
    models.User.create({
      first_name: 'Neo',
      last_name: 'Anderson',
      username: 'th30ne',
      password: 'Matrix2001',
      //email: 'nAnderson@yahoo.com'
    })
    .then( () => {
      done('Failed');
    })
    .catch( (err) => {
      done();
    })
  });
  it('Bad email should fail', (done) => {
    models.User.create({
      first_name: 'Neo',
      last_name: 'Anderson',
      username: 'th30ne',
      password: 'Matrix2001',
      email: 'nAnderson'
    })
    .then( () => {
      done('Failed');
    })
    .catch( (err) => {
      done();
    })
  });
  //  Commented out because this User is already added after running one
  //  Would just keep failing.. There is a test for that below.
  /*
  it('Should save correctly when all properties are provided', (done) => {
    models.User.create({
      first_name: 'Neo',
      last_name: 'Anderson',
      username: 'th30ne',
      password: 'Matrix2001',
      email: 'nAnderson@yahoo.com'
    })
    .then( () => {
      done();
    })
    .catch( (err) => {
      done(err);
    })
  });
  */
  it('Douplicate should fail', (done) => {
    models.User.create({
      first_name: 'Neo',
      last_name: 'Anderson',
      username: 'th30ne',
      password: 'Matrix2001',
      email: 'nAnderson@yahoo.com'
    })
    .then( () => {
      done('Failed');
    })
    .catch( (err) => {
      done();
    })
  });
});
