import { PrismaClient } from '@prisma/client'

declare global {
  var prisma: PrismaClient | undefined
}

const prismadb = global.prisma || new PrismaClient({
  log: ['query', 'error', 'warn'], // Log queries, errors, and warnings
  errorFormat: 'pretty', // Make errors more readable
})

if (process.env.NODE_ENV === 'development') global.prisma = prismadb

export default prismadb 