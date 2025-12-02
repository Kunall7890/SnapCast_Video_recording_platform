import { NextRequest, NextResponse } from "next/server";
import aj, { createMiddleware, detectBot, shield } from "./lib/arcjet";

export async function middleware(request: NextRequest) {
  // Note: We can't use auth.api.getSession() here because middleware runs on Edge Runtime
  // which doesn't support database connections. Session validation should happen in 
  // protected routes or client-side instead.
  
  return NextResponse.next();
}

const validate = aj
  .withRule(
    shield({
      mode: "LIVE",
    })
  )
  .withRule(
    detectBot({
      mode: "LIVE",
      allow: ["CATEGORY:SEARCH_ENGINE", "G00G1E_CRAWLER"], // allow other bots if you want to.
    })
  );

export default createMiddleware(validate);

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico|sign-in|assets).*)"],
};
