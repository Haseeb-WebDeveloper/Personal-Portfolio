import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

// List of allowed origins
const allowedOrigins = [
  'http://localhost:3000',
  'https://haseebkhan.online',
  'https://www.haseebkhan.online'
  // Add more domains as needed
]

export function middleware(request: NextRequest) {
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
        // For development, you might want to allow all origins
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
  matcher: '/api/:path*',
} 