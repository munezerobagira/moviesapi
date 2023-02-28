import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';
import app from '../src/app';

chai.use(chaiHttp);
describe('Enpoint /sample', () => {
  it('GET /sample should respond with an appropriate message', async () => {
    const response = await chai.request(app).get('/sample');
    expect(response).to.have.status(200);
    expect(response.body).to.have.property('message');
    expect(response.body.message).to.equal('Success');
  });
  it('POST /sample should respond with an appropriate message', async () => {
    const response = await chai.request(app).post('/sample');
    expect(response).to.have.status(201);
    expect(response.body).to.have.property('message');
    expect(response.body.message).to.equal('Sample POST');
  });
  it('PUT /sample should respond with an appropriate message', async () => {
    const response = await chai.request(app).put('/sample');
    expect(response).to.have.status(200);
    expect(response.body).to.have.property('message');
    expect(response.body.message).to.equal('Sample PUT');
  });
  it('PATCH /sample should respond with an appropriate message', async () => {
    const response = await chai.request(app).patch('/sample');
    expect(response).to.have.status(200);
    expect(response.body).to.have.property('message');
    expect(response.body.message).to.equal('Sample PATCH');
  });
  it('DELETE /sample should respond with an appropriate message', async () => {
    const response = await chai.request(app).delete('/sample');
    expect(response).to.have.status(200);
    expect(response.body).to.have.property('message');
    expect(response.body.message).to.equal('Sample DELETE');
  });
  it('GET /sample/error should appropriate catch error', async () => {
    const response = await chai.request(app).get('/sample/error');
    expect(response).to.have.status(500);
    expect(response.body).to.have.property('message');
    expect(response.body.message).to.equal('Error occured');
  });
});
