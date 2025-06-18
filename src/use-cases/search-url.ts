import { UrlRepository } from '../repositories/url-repository'
import { UrlNotFoundError } from './errors/url-not-found-error'

interface SearchUrlUseCaseRequest {
  alias: string
}

interface SearchUrlUseCaseReply {
  url: string
}

export class SearchUrlUseCase {
  constructor(private urlRepository: UrlRepository) {}

  async execute({
    alias,
  }: SearchUrlUseCaseRequest): Promise<SearchUrlUseCaseReply> {
    const foundUrl = await this.urlRepository.findByAlias(alias)

    if (!foundUrl) {
      throw new UrlNotFoundError()
    }

    const { url } = foundUrl

    return { url }
  }
}
