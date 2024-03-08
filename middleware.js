import Negotiator from "negotiator";
import { NextResponse } from "next/server";
import { match } from "@formatjs/intl-localematcher";

let locales = ["en", "nl", "fr"];
let defaultLocale = "en";

function getLocale() {
  let headers = { "accept-language": "en,en;q=0.5" };
  let languages = new Negotiator({ headers }).languages();

  return match(languages, locales, defaultLocale);
}

export function middleware(request) {
  const { pathname } = request.nextUrl;
  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  if (pathnameHasLocale) {
    return;
  }

  const locale = getLocale(request);
  request.nextUrl.pathname = `/${locale}${pathname}`;
  return NextResponse.redirect(request.nextUrl);
}

export const config = {
  matcher: ["/"],
};
