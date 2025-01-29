import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { verifyJWT } from './utils/jwt';

// List of allowed origins
const allowedOrigins = [
  'http://localhost:3000',
  'https://haseebkhan.online',
  'https://www.haseebkhan.online'
]

// protect admin routes
const protectedRoutes = ['/admin']

export function middleware(request: NextRequest) {
  // check if the route is protected
  if (protectedRoutes.some(route => request.nextUrl.pathname.startsWith(route))) {
    console.log('protected route');
    const token = request.cookies.get('token')?.value;
    if (!token) {
      return NextResponse.redirect(new URL('/admin/auth/login', request.url));
    }
    let decodedToken;
    try {
      decodedToken = verifyJWT(token);
    } catch (error) {
      return NextResponse.redirect(new URL('/admin/auth/login', request.url));
    }
    if ((decodedToken as any).role !== 'admin') {
      return NextResponse.redirect(new URL('/admin/auth/login', request.url));
    }
    return NextResponse.next();
  }

  // Get the origin from the request headers
  const origin = request.headers.get('origin')
  
  // Only run this middleware for API routes
  if (request.nextUrl.pathname.startsWith('/api')) {
    // Create a new response headers object
    const headers = new Headers({
      'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type, Authorization',
      'Access-Control-Allow-Credentials': 'true',
    })

    // Set CORS headers based on origin
    if (origin) {
      if (allowedOrigins.includes(origin)) {
        headers.set('Access-Control-Allow-Origin', origin)
      } else {
        headers.set('Access-Control-Allow-Origin', '*')
      }
    }

    // Handle preflight requests
    if (request.method === 'OPTIONS') {
      return NextResponse.json({}, { headers })
    }

    // Forward the request with the modified headers
    const response = NextResponse.next()
    
    // Apply the CORS headers to the response
    headers.forEach((value, key) => {
      response.headers.set(key, value)
    })

    return response
  }

  // Return undefined to continue the middleware chain
  return NextResponse.next()
}

// Configure which routes the middleware should run on
export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
} 