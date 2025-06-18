import { PrismaUrlRepository } from '../../repositories/prisma-repository/prisma-url-repository'
import { CreateUrlUseCase } from '../create-url'

export function makeCreateUrlUseCase() {
  const urlRepository = new PrismaUrlRepository()
  const useCase = new CreateUrlUseCase(urlRepository)

  return useCase
}
