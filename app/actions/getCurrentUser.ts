import { getServerSession } from 'next-auth'
import { authOptions } from '../../lib/auth'
import prisma from '../../lib/prismadb'

export default async function getCurrentUser() {
  try {
    const session = await getServerSession(authOptions)

    if (!session?.user?.email) {
      return null
    }

    const currentUser = await prisma.user.findUnique({
      where: {
        email: session.user.email as string
      }
    })

    if (!currentUser) {
      return null
    }

    return currentUser
  } catch (_error) {
    return null
  }
} 