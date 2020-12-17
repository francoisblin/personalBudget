const { assert } = require('chai')
const request = require('supertest')
const app = require('../index')

describe('root page', () => {
  describe('GET /envelopes', () => {
    it('returns a 200 status', async () => {
      const response = await request(app)
        .get('/envelopes')
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
    it('returns a 201 status', async () => {
      const response = await request(app)
        .post('/envelopes')
      assert.equal(response.status, 201)
    })
  })
})
