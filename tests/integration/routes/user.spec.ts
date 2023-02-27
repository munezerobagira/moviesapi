import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';
import mongoose from 'mongoose';
import { before } from 'node:test';
import app from '../../../src/app';
import { MONGO_URL } from '../../../src/config';
chai.use(chaiHttp);
describe('Enpoint /sample', function () {
  this.timeout(5000);
  this.beforeAll(async () => {
    await mongoose.connect(MONGO_URL);
    const collections = mongoose.connection.collections;

    await Promise.all(
      Object.values(collections).map(async (collection) => {
        await collection.deleteMany({}); // an empty mongodb selector object ({}) must be passed as the filter argument
      })
    );
  });
  this.afterAll(async () => {
    await mongoose.disconnect();
  });
  it('POST /users should return 400 data if the email is not valid', async () => {
    const user = { name: 'testing', password: 'testing', email: 'testing' };
    const response = await chai.request(app).post('/users').send(user);
    expect(response).to.have.status(400);
    expect(response.body).to.have.property('message');
    expect(response.body.message).to.equal('Validation error');
    expect(response.body).to.have.property('error');
    expect(response.body.error).to.equal('"email" must be a valid email');
  });
  it('POST /users should return 200 data if data is valid', async () => {
    const user = { name: 'testing', password: 'testing', email: 'testing@testing.com' };
    const response = await chai.request(app).post('/users').send(user);
    expect(response).to.have.status(201);
    expect(response.body).to.have.property('message');
    expect(response.body.message).to.equal('User added successfully');
  });
  it('POST /users should return 409 data if data already exists', async () => {
    const user = { name: 'testing', password: 'testing', email: 'testing@testing.com' };
    const response = await chai.request(app).post('/users').send(user);
    expect(response).to.have.status(409);
    expect(response.body).to.have.property('message');
    expect(response.body.message).to.equal('User already exists');
  });
  it('GET /users should return 200 data ', async () => {
    const response = await chai.request(app).get('/users');
    expect(response).to.have.status(200);
    expect(response.body).to.have.property('data');
    expect(response.body.data).to.be.an('array');
  });
});
