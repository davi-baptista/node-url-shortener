import { Url } from '../generated/prisma'

export interface UrlRepository {
  create(url: string, alias: string): Promise<Url>
  findByAlias(alias: string): Promise<Url | null>
}
