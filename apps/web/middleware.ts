import { NextResponse } from 'next/server';
import { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const userToken = request.cookies.get('connect.sid')?.value;

  if (request.nextUrl.pathname.startsWith('/account') && !userToken) {
    return NextResponse.redirect(new URL('/login', request.url));
  }

  if (['/login', '/register'].includes(request.nextUrl.pathname) && userToken) {
    return NextResponse.redirect(new URL('/account', request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/login', '/register', '/account/:path*'],
};
