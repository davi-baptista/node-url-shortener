import { beforeEach, describe, expect, it } from 'vitest'
import { InMemoryUrlRepository } from '../repositories/in-memory-repository/in-memory-url-repository'
import { SearchUrlUseCase } from './search-url'
import { UrlNotFoundError } from './errors/url-not-found-error'

let urlRepository: InMemoryUrlRepository
let sut: SearchUrlUseCase

describe('Search Url', () => {
  beforeEach(async () => {
    urlRepository = new InMemoryUrlRepository()
    sut = new SearchUrlUseCase(urlRepository)
  })

  it('should be able to search a URL with alias', async () => {
    urlRepository.create('https://google.com', 'example')
    const { url } = await sut.execute({
      alias: 'example',
    })

    expect(url).toEqual('https://google.com')
  })

  it('should not be able to search a URL with a non existing alias', async () => {
    urlRepository.create('https://google.com', 'example')

    await expect(() =>
      sut.execute({
        alias: 'wrong_alias',
      }),
    ).rejects.toBeInstanceOf(UrlNotFoundError)
  })
})
