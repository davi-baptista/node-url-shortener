import { PrismaUrlRepository } from '../../repositories/prisma-repository/prisma-url-repository'
import { SearchUrlUseCase } from '../search-url'

export function makeSearchUrlUseCase() {
  const urlRepository = new PrismaUrlRepository()
  const useCase = new SearchUrlUseCase(urlRepository)

  return useCase
}
