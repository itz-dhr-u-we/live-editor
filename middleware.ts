// middleware.ts
import { clerkMiddleware } from "@clerk/nextjs/server";

export default clerkMiddleware();

export const config = {
  matcher: [
    /*
     * Protects these routes:
     * Add `/api/liveblocks-auth` here if not already matched
     */
    "/((?!_next/image|_next/static|favicon.ico).*)",
  ],
};
