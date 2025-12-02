import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Appends utm_source=utmSource to an external URL.
 * Leaves internal URLs (starting with /) unchanged.
 */
export function appendUtmSource(
  url: string,
  utmSource: string = siteUrl
): string {
  if (!url || url.startsWith("/")) return url;
  const hasQuery = url.includes("?");
  const utm = `utm_source=${utmSource}`;
  return url + (hasQuery ? "&" : "?") + utm;
}
