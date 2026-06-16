import { useTheme } from '../context/ThemeContext'
import { brand } from '../data/siteData'

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()
  const isLight = theme === 'light'

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={isLight ? 'Cambiar a tema morado' : 'Cambiar a tema blanco'}
      title={isLight ? 'Tema morado' : 'Tema claro'}
      className="theme-float-toggle"
    >
      <img src={brand.logo} alt="" className="theme-float-toggle-logo" />
    </button>
  )
}
