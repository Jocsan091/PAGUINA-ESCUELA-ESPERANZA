import type { AstroCookies } from "astro";

const adminCookieName = "escuela_esperanza_admin_session";

function getAdminUsername() {
  return import.meta.env.ADMIN_USERNAME || "";
}

function getAdminPassword() {
  return import.meta.env.ADMIN_PASSWORD || "";
}

export function isAdminConfigured() {
  return Boolean(getAdminUsername() && getAdminPassword());
}

async function createSha256Hash(value: string) {
  const encoder = new TextEncoder();
  const hashBuffer = await crypto.subtle.digest("SHA-256", encoder.encode(value));
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  return hashArray.map((part) => part.toString(16).padStart(2, "0")).join("");
}

async function getExpectedAdminToken() {
  return createSha256Hash(`${getAdminUsername()}:${getAdminPassword()}:escuela-esperanza`);
}

export async function getAdminSessionToken() {
  if (!isAdminConfigured()) return "";
  return getExpectedAdminToken();
}

export async function isAdminAuthenticated(cookies: AstroCookies) {
  if (!isAdminConfigured()) return false;

  const cookieValue = cookies.get(adminCookieName)?.value;
  if (!cookieValue) return false;

  return cookieValue === (await getExpectedAdminToken());
}

export function setAdminSessionCookie(cookies: AstroCookies, token: string) {
  cookies.set(adminCookieName, token, {
    httpOnly: true,
    sameSite: "strict",
    path: "/",
    secure: import.meta.env.PROD,
    maxAge: 60 * 60 * 8
  });
}

export function clearAdminSessionCookie(cookies: AstroCookies) {
  cookies.delete(adminCookieName, {
    path: "/"
  });
}
