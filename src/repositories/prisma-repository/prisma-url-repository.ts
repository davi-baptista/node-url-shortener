import { prisma } from '../../lib/prisma'
import { UrlRepository } from '../url-repository'

export class PrismaUrlRepository implements UrlRepository {
  async create(url: string, alias: string) {
    const createdUrl = await prisma.url.create({
      data: {
        url,
        alias,
      },
    })

    return createdUrl
  }

  async findByAlias(alias: string) {
    const url = await prisma.url.findUnique({
      where: {
        alias,
      },
    })

    return url || null
  }
}
