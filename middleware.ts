import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { auth } from '@/auth'
// This function can be marked `async` if using `await` inside
export async function middleware(request: NextRequest) {
    const session = await auth()
    let currentUrl = request.nextUrl

    if (session && !session?.user.isAdmin && currentUrl.pathname.startsWith('/admin')) {
        return NextResponse.redirect(new URL('/', request.url))
    }


    return NextResponse.next()
}

// See "Matching Paths" below to learn more
export const config = {
    matcher: [
        '/',
        '/admin/:path*',
    ]
}