// Prefix a public/ path with Vite's base so VITE_BASE deployments keep working.
export const asset = (path) => `${import.meta.env.BASE_URL}${path.replace(/^\//, '')}`
