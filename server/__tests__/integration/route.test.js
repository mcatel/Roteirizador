import request from 'supertest';
import app from '../../src/app';

describe('Router', () => {
  it('must create a route and its respective stops', async () => {
    const coordinates = [{
      latitude: -29.1118722,
      longitude: -51.1889425,
    }, {
      latitude: -29.1828611,
      longitude: -51.1728063,
    }];

    const response = await request(app).post('/routes').send({ coordinates });

    expect(response.status).toBe(200);
  });

  it('must return a 400 error if there are no coordinates', async () => {
    const response = await request(app).post('/routes').send();

    expect(response.status).toBe(400);
  });

  it('return a 400 error when sending an empty array', async () => {
    const response = await request(app).post('/routes').send({ coordinates: [] });

    expect(response.status).toBe(400);
  });
});
