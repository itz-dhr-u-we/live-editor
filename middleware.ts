// middleware.ts
import { NextResponse } from "next/server";

export function middleware() {
  console.log("Middleware runs fine.");
  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};
