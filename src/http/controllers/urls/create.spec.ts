import { afterAll, beforeAll, describe, expect, it } from 'vitest'
import { app } from '../../../app'
import request from 'supertest'

describe('Create Url (E2E)', () => {
  beforeAll(async () => {
    await app.ready()
  })

  afterAll(async () => {
    await app.close()
  })

  it('should be able to create a new URL with alias', async () => {
    const response = await request(app.server)
      .post('/')
      .send({ url: 'https://google.com', alias: 'example' })

    expect(response.body.createUrl.id).toEqual(expect.any(String))
  })
})
