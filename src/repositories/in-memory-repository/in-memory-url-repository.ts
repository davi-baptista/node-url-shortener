import { Url } from '../../generated/prisma'
import { UrlRepository } from '../url-repository'
import { randomUUID } from 'node:crypto'

export class InMemoryUrlRepository implements UrlRepository {
  public items: Url[] = []

  async create(url: string, alias: string) {
    const createUrl = {
      id: randomUUID(),
      url,
      alias,
      created_at: new Date(),
    }

    this.items.push(createUrl)

    return createUrl
  }

  async findByAlias(alias: string) {
    return this.items.find((item) => item.alias === alias) || null
  }
}
