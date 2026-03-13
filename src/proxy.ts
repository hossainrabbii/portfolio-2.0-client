import { NextRequest, NextResponse } from "next/server";

export function proxy(req: NextRequest) {
  const auth = localStorage.getItem("auth");

  if (!auth) {
    return NextResponse.redirect(new URL("/login", req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/dashboard", "/dashboard/:path*"],
};
