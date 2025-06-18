import { FastifyReply, FastifyRequest } from 'fastify'
import { z } from 'zod'
import { makeCreateUrlUseCase } from '../../../use-cases/factories/make-create-url-use-case'
import { AliasAlreadyExistsError } from '../../../use-cases/errors/alias-already-exists-error'

export async function create(request: FastifyRequest, reply: FastifyReply) {
  const bodySchema = z.object({
    url: z.string().url(),
    alias: z.string(),
  })

  const { url, alias } = bodySchema.parse(request.body)

  const useCase = makeCreateUrlUseCase()

  try {
    const { createUrl } = await useCase.execute({ url, alias })

    return reply.status(201).send({ createUrl })
  } catch (err) {
    if (err instanceof AliasAlreadyExistsError) {
      return reply.status(400).send({ message: err.message })
    }

    return reply.status(501).send({ message: 'Internal error' })
  }
}
