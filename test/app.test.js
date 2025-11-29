const request = require('supertest');
const app = require('../vvce-lost-found'); // adjust path to your main app file

describe('Basic endpoint tests', () => {
  it('GET / should return 200', async () => {
    const res = await request(app).get('/');
    expect(res.statusCode).toBe(200);
  });
});
