import { useRouter } from 'next/router'
import { NextFetchEvent, NextRequest, NextResponse } from 'next/server'
import { accountVar } from '../graphql/Vars'

export function middleware(req: NextRequest) {
  const account = accountVar()
  const { pathname } = req.nextUrl
  console.log(pathname)
  if (
    !account &&
    pathname !== ('/' || '/assets/images/logo.jpg' || '/favicon.ico')
  ) {
    return NextResponse.redirect('/')
  }
  return NextResponse.next()
}
