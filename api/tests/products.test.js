const app = require('../app');
const request = require('supertest');

// =======================================================================================
// GET ALL PRODUCTS 
// =======================================================================================

describe('GET /api/phones --> Get all products', () => {

    it('Responds with a status code of 200 after all products are fetched', async () => {

        const res = await request(app).get('/api/phones');

        expect(res.status).toEqual(200);
        expect(res.type).toEqual('application/json');

    });

    it('Responds with a status code of 404 when no route is found', async () => {

        const res = await request(app)
            .get('/api/phoness');

        expect(res.status).toEqual(404);
        expect(res.type).toEqual('application/json');

    });

});
