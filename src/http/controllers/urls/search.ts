import { FastifyReply, FastifyRequest } from 'fastify'
import { z } from 'zod'
import { makeSearchUrlUseCase } from '../../../use-cases/factories/make-search-url-use-case'
import { UrlNotFoundError } from '../../../use-cases/errors/url-not-found-error'

export async function search(request: FastifyRequest, reply: FastifyReply) {
  const paramsSchema = z.object({
    alias: z.string(),
  })

  const { alias } = paramsSchema.parse(request.params)

  const useCase = makeSearchUrlUseCase()

  try {
    const { url } = await useCase.execute({ alias })

    return reply.status(200).send({ url })
  } catch (err) {
    if (err instanceof UrlNotFoundError) {
      return reply.status(400).send({ message: err.message })
    }

    return reply.status(501).send({ message: 'Internal error' })
  }
}
