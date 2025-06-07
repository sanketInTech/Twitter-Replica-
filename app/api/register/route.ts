import { NextResponse } from 'next/server'
import bcrypt from 'bcrypt'
import prisma from '@/lib/prismadb'

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { email, name, username, password } = body

    if (!email || !name || !username || !password) {
      return new NextResponse('Missing required fields', { status: 400 })
    }

    // Check if user already exists
    const existingUser = await prisma.user.findFirst({
      where: {
        OR: [
          { email },
          { username }
        ]
      }
    })

    if (existingUser) {
      return new NextResponse('User already exists', { status: 400 })
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 12)

    // Create user
    const user = await prisma.user.create({
      data: {
        email,
        name,
        username,
        hashPassword: hashedPassword
      }
    })

    return NextResponse.json(user)
  } catch (error) {
    console.log('[REGISTER_ERROR]', error)
    return new NextResponse('Internal Error', { status: 500 })
  }
} 