import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    projects: [
      {
        extends: true,
        test: {
          name: 'e2e',
          include: ['src/http/controllers/**/*.spec.ts'],
          environment: 'test/environments/prisma.ts',
        },
      },
      {
        extends: true,
        test: {
          name: 'unit',
          include: ['src/use-cases/**/*.spec.ts'],
          environment: 'node',
        },
      },
    ],
  },
})
