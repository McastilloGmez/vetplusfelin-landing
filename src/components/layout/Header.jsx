import { useEffect, useState } from 'react'
import Container from './Container'
import Button from '../ui/Button'
import { navigation } from '../../data/navigation'
import './Header.css'

// Cabecera fija con navegación. En móvil, los enlaces viven en un menú desplegable.
export default function Header() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    if (!open) return
    const onKeyDown = (e) => e.key === 'Escape' && setOpen(false)
    document.addEventListener('keydown', onKeyDown)
    return () => document.removeEventListener('keydown', onKeyDown)
  }, [open])

  // Cierra el menú al elegir cualquier enlace (incluido el botón de reserva)
  const handleNavClick = (e) => {
    if (e.target.closest('a')) setOpen(false)
  }

  return (
    <header className={`header${open ? ' is-open' : ''}`}>
      <Container className="header__bar">
        <a className="header__logo" href="#top" onClick={() => setOpen(false)}>{navigation.brand}</a>

        <button
          type="button"
          className="header__toggle"
          aria-expanded={open}
          aria-controls="primary-nav"
          aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
          onClick={() => setOpen((v) => !v)}
        >
          <span /><span /><span />
        </button>

        <nav id="primary-nav" className="header__nav" aria-label="Principal" onClick={handleNavClick}>
          <ul className="header__links">
            {navigation.links.map((l) => (
              <li key={l.href}><a href={l.href}>{l.label}</a></li>
            ))}
          </ul>
          <Button size="sm" href={navigation.cta.href}>{navigation.cta.label}</Button>
        </nav>
      </Container>
    </header>
  )
}
