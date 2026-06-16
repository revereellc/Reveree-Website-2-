/**
 * The original site used multi-page links like:
 *   "index.html", "service.html?cat=foo", "creator.html?id=bar#Hash"
 *
 * In the React Router SPA these map to clean paths. This helper converts an
 * original-style href into the equivalent router path so every button and link
 * keeps pointing exactly where it did before.
 */
export function toRoutePath(href: string): string {
  if (!href) return "/";

  const hashIndex = href.indexOf("#");
  const queryIndex = href.indexOf("?");

  let base = href;
  let search = "";
  let hash = "";

  if (hashIndex !== -1) {
    hash = href.slice(hashIndex); // includes '#'
    base = href.slice(0, hashIndex);
  }
  if (queryIndex !== -1 && (hashIndex === -1 || queryIndex < hashIndex)) {
    search = base.slice(queryIndex); // includes '?'
    base = base.slice(0, queryIndex);
  }

  const map: Record<string, string> = {
    "index.html": "/",
    "": "/",
    "services.html": "/services",
    "service.html": "/service",
    "creators.html": "/creators",
    "creator.html": "/creator",
    "how-it-works.html": "/how-it-works",
    "post-request.html": "/post-request",
    "login.html": "/login",
    "signup.html": "/signup",
  };

  const routeBase = map[base] ?? (base.startsWith("/") ? base : `/${base}`);
  return `${routeBase}${search}${hash}`;
}
