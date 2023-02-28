import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';
import { JsonWebTokenError } from 'jsonwebtoken';

import mongoose, { Mongoose } from 'mongoose';
import app from '../src/app';
import { MONGO_URL, SECRET } from '../src/config';
import User from '../src/models/User';
import jwt from 'jsonwebtoken';
chai.use(chaiHttp);
describe('Enpoint /lists', function () {
  this.timeout(5000);
  let validId: string;
  let token: string;
  this.beforeAll(async () => {
    await mongoose.connect(MONGO_URL);
    const collections = mongoose.connection.collections;

    await Promise.all(
      Object.values(collections).map(async (collection) => {
        await collection.deleteMany({}); // an empty mongodb selector object ({}) must be passed as the filter argument
      })
    );

    const user = await User.create({ name: 'testing', email: 'testing@gmail.com', password: 'testing' });
    token = await jwt.sign({ user }, SECRET, {
      expiresIn: '48h',
    });
  });
  this.afterAll(async () => {
    await mongoose.disconnect();
  });
  it('POST  /lists should return 401  if no token provided', async () => {
    const list = { name: 'Mytop100movies' };
    const response = await chai.request(app).get('/lists').send(list);
    expect(response).to.have.status(401);
    expect(response.body).to.have.property('message');
    expect(response.body.message).to.equal('You are not authorized');
  });
  it('POST  /lists should return 201 data and should create movie list', async () => {
    console.log(token);
    const list = { name: 'Mytop100movies' };
    const response = await chai.request(app).post('/lists').send(list).set('Authorization', `Bearer ${token}`);
    expect(response).to.have.status(201);
    expect(response.body).to.have.property('message');
    expect(response.body.message).to.equal('Movie list created successfully');
    validId = response.body.data._id;
  });
  it('GET /lists should return 200 and should fetch user lists', async () => {
    const response = await chai.request(app).get('/lists').set('Authorization', `Bearer ${token}`);
    expect(response).to.have.status(200);
    expect(response.body).to.have.property('message');
    expect(response.body.message).to.equal('Movie lists fetched successfully');
  });
  it('GET /lists/:id 200 if invalid id provided should return a single list', async () => {
    const response = await chai.request(app).get(`/lists/${validId}`).set('Authorization', `Bearer ${token}`);
    expect(response).to.have.status(200);
    expect(response.body).to.have.property('message');
    expect(response.body.message).to.equal('Movie lists fetched successfully');
  });
  it('POST /lists/:id should return 200  and add movie to list', async () => {
    const id = '646389';
    const response = await chai
      .request(app)
      .post(`/lists/${validId}`)
      .send({ movieId: id })
      .set('Authorization', `Bearer ${token}`);
    expect(response).to.have.status(200);
    expect(response.body).to.have.property('message');
    expect(response.body.message).to.equal('Movie added successfully');
  });
  it('PATCH /lists/:movieId/ should return 200  and add movie to list', async () => {
    const id = '646389';
    const response = await chai
      .request(app)
      .patch(`/lists/${validId}/${id}`)
      .send({ rank: 1 })
      .set('Authorization', `Bearer ${token}`);
    expect(response).to.have.status(200);
    expect(response.body).to.have.property('message');
    expect(response.body.message).to.equal('Movie updated successfully');
  });
  it('DELETE /lists/:movieId/:movieId should return 200  and add movie to list', async () => {
    const id = '646389';
    const response = await chai
      .request(app)
      .delete(`/lists/${validId}/${id}`)
      .send({ movieId: id })
      .set('Authorization', `Bearer ${token}`);
    expect(response).to.have.status(200);
    expect(response.body).to.have.property('message');
    expect(response.body.message).to.equal('Movie removed successfully');
  });
});
