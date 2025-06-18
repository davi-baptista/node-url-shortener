import fastify from 'fastify'
import { urlRoutes } from './http/controllers/urls/routes'

export const app = fastify()

app.register(urlRoutes, {
  prefix: '/urls',
})
