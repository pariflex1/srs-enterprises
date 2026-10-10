/**
 * Resolve a file from /public against the deploy base path.
 * Local dev uses "/", GitHub Pages project sites use "/srs-enterprises/".
 */
export function asset(path: string): string {
  return `${import.meta.env.BASE_URL}${path.replace(/^\/+/, "")}`;
}
