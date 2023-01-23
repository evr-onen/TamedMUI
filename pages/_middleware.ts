import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

export function middleware(request: NextRequest) {
  const url = request.nextUrl.clone()
  console.log(url)
  if (url.pathname === "/") {
    url.pathname = "/elements"
    return NextResponse.redirect(url)
  }
}
