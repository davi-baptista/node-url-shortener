import { FastifyInstance } from 'fastify'
import { create } from './create'
import { search } from './search'

export async function urlRoutes(app: FastifyInstance) {
  app.post('/', create)
  app.get('/:alias', search)
}
