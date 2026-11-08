// Prefix internal paths with the deploy base (e.g. '/maryam-cv' on GitHub Pages project sites, '' on a custom domain).
const base = import.meta.env.BASE_URL.replace(/\/$/, '');
export const u = (path: string) => base + path;
