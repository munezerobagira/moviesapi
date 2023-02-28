import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';
import mongoose from 'mongoose';
import app from '../src/app';
import { MONGO_URL } from '../src/config';
chai.use(chaiHttp);
describe('Enpoint /movies', function () {
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
  it('GET /movies should return 200 data and should fetch the from TMDB', async () => {
    const response = await chai.request(app).get('/movies');
    expect(response).to.have.status(200);
    expect(response.body).to.have.property('message');
    expect(response.body.message).to.equal('Fetched movies');
  });
  it('GET /movies/search should return 200 and should fetch the from TMDBd', async () => {
    const keywords = 'testing';
    const response = await chai.request(app).get(`/movies/search?keywords=${keywords}`);
    expect(response).to.have.status(200);
    expect(response.body).to.have.property('message');
    expect(response.body.message).to.equal('Searched movies');
  });
  it('GET /movies/:id should return 404 from MDB when the id is not found', async () => {
    const id = 'testing';
    const response = await chai.request(app).get(`/movies/${id}`);
    expect(response).to.have.status(500);
    expect(response.body).to.have.property('error');
    expect(response.body.error).to.equal('Request failed with status code 404');
  });
  it('GET /movies/:id should return 200 from MDB when the id is not found', async () => {
    const id = '646389';
    const response = await chai.request(app).get(`/movies/${id}`);
    expect(response).to.have.status(200);
    expect(response.body).to.have.property('message');
    expect(response.body.message).to.equal('Fetched  movie');
  });
});
