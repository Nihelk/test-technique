// test/server.test.js

const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../server'); // Votre fichier principal du serveur
const should = chai.should();

chai.use(chaiHttp);

describe('Server', () => {

  it('should predict moderation based on text and language', (done) => {
    chai.request(server)
      .post('/api/moderation/predict')
      .send({ text: "Inappropriate content", language: "en" })
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a('object');
        res.body.should.have.property('probability');
        done();
      });
  });

  it('should score content based on text and language', (done) => {
    chai.request(server)
      .post('/api/moderation/score')
      .send({ text: "Content to score", language: "fr" })
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a('object');
        res.body.should.have.property('score');
        done();
      });
  });

});
