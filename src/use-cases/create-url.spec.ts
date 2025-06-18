import { beforeEach, describe, expect, it } from 'vitest'
import { AliasAlreadyExistsError } from './errors/alias-already-exists-error'
import { CreateUrlUseCase } from './create-url'
import { InMemoryUrlRepository } from '../repositories/in-memory-repository/in-memory-url-repository'

let urlRepository: InMemoryUrlRepository
let sut: CreateUrlUseCase

describe('Create Url', () => {
  beforeEach(async () => {
    urlRepository = new InMemoryUrlRepository()
    sut = new CreateUrlUseCase(urlRepository)
  })

  it('should be able to create a new URL with alias', async () => {
    const { createUrl } = await sut.execute({
      url: 'https://google.com',
      alias: 'example',
    })

    expect(createUrl.id).toEqual(expect.any(String))
  })

  it('should be able to create a new URL with alias', async () => {
    await sut.execute({
      url: 'https://google.com',
      alias: 'example',
    })

    await expect(() =>
      sut.execute({
        url: 'https://google.com',
        alias: 'example',
      }),
    ).rejects.toBeInstanceOf(AliasAlreadyExistsError)
  })
})
