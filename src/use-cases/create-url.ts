import { Url } from '../generated/prisma'
import { UrlRepository } from '../repositories/url-repository'
import { AliasAlreadyExistsError } from './errors/alias-already-exists-error'

interface CreateUrlUseCaseRequest {
  url: string
  alias: string
}

interface CreateUrlUseCaseReply {
  createUrl: Url
}

export class CreateUrlUseCase {
  constructor(private urlRepository: UrlRepository) {}

  async execute({
    url,
    alias,
  }: CreateUrlUseCaseRequest): Promise<CreateUrlUseCaseReply> {
    const foundUrl = await this.urlRepository.findByAlias(alias)

    if (foundUrl) {
      throw new AliasAlreadyExistsError()
    }

    const createUrl = await this.urlRepository.create(url, alias)
    return { createUrl }
  }
}
