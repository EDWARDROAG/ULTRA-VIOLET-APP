/** Prefija rutas de public/ con la base de Vite (necesario en GitHub Pages). */
export function asset(path) {
  const normalized = path.startsWith('/') ? path.slice(1) : path
  return `${import.meta.env.BASE_URL}${normalized}`
}
