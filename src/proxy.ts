import { NextRequest, NextResponse } from "next/server";

export function proxy(req: NextRequest) {
  const auth = req.cookies.get("auth")?.value;

  console.log(
    `
    ========================
    Proxy running, cookie:
    ========================`,
    auth,
  );

  if (!auth) {
    return NextResponse.redirect(new URL("/login", req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/dashboard", "/dashboard/:path*", "/sashboard"],
};
