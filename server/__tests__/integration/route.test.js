const request = require('supertest');
const app = require('../../src/app');

describe("Router", () => {

    it('must create a route and its respective stops', async () => {
        const coordinates = [{
            latitude: -29.1118722,
            longitude: -51.1889425
        }, {
            latitude: -29.1828611,
            longitude: -51.1728063
        }];

        const response = await request(app).post('/routes').send({ coordinates });

        expect(response.status).toBe(200);
    });
});