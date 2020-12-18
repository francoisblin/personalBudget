const { assert } = require('chai')
const expect = require('chai').expect
const request = require('supertest')
const app = require('../index')

describe('root page', () => {
  describe('GET /envelopes', () => {
    it('returns a 200 status', async () => {
      const response = await request(app)
        .get('/envelopes/about')
      assert.equal(response.status, 200)
    })
    it('returns an array', async () => {
      const response = await request(app)
        .get('/envelopes')
      console.log(response.body)
      assert.isArray(response.body, 'That\'s an Array')
    })
  })
  describe('POST /envelopes', () => {
    it('throw error when ther is no name', async () => {
      const response = await request(app)
        .post('/envelopes')
      assert.equal(response.status, 500)
    })
    it('returns the name and budget request', async () => {
      const name = 'Holidays'
      const budget = 1200
      const response = await request(app)
        .post('/envelopes')
        .query({ name, budget })
      console.log(typeof response.body)
      console.log(typeof expected)
      assert.equal(response.status, 201)
      assert.equal(response.body.name, 'Holidays')
    })
  })
  describe('GET /envelopes/:envelopeid', () => {
    it('return a single envelope object', async () => {
      await request(app)
        .post('/envelopes')
      return await request(app)
        .get('/envelopes/1')
        .expect(200)
        .then((response) => {
          const envelope = response.body
          expect(envelope.id).to.be.an.equal(1)
        })
    })
    it('called with an invalid ID returns a 404 error', async () => {
      return request(app)
        .get('/envelopes/450')
        .expect(404)
    })
  })
})
