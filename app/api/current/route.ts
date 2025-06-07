import { NextResponse } from 'next/server'
import getCurrentUser from '@/app/actions/getCurrentUser'

export async function GET() {
  try {
    const currentUser = await getCurrentUser()

    if (!currentUser) {
      return new NextResponse('Unauthorized', { status: 401 })
    }

    return NextResponse.json(currentUser)
  } catch (error) {
    console.log('[CURRENT_USER]', error)
    return new NextResponse('Internal Error', { status: 500 })
  }
} 