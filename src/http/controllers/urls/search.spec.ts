import { afterAll, beforeAll, describe, expect, it } from 'vitest'
import { app } from '../../../app'
import request from 'supertest'

describe('Search Url (E2E)', () => {
  beforeAll(async () => {
    await app.ready()
  })

  afterAll(async () => {
    await app.close()
  })

  it('should be able to search a URL with alias', async () => {
    await request(app.server)
      .post('/')
      .send({ url: 'https://google.com', alias: 'example' })

    const response = await request(app.server).get('/example')

    expect(response.body.url).toEqual('https://google.com')
  })
})
