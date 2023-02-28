import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';
import mongoose from 'mongoose';
import app from '../src/app';
import { MONGO_URL } from '../src/config';
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

  it('GET /users should return 200 data ', async () => {
    const response = await chai.request(app).get('/users');
    expect(response).to.have.status(200);
    expect(response.body).to.have.property('data');
    expect(response.body.data).to.be.an('array');
  });
});
