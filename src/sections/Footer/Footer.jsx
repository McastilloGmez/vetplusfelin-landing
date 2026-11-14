import Container from '../../components/layout/Container'
import { footer } from '../../data/closing'
import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <Container>
        <div className="footer__grid">
          <div className="footer__brand">
            <p className="footer__logo">{footer.brand}</p>
            <p className="footer__tagline">{footer.tagline}</p>
          </div>
          {footer.columns.map((col) => (
            <nav className="footer__col" key={col.title} aria-label={col.title}>
              <h3 className="footer__heading">{col.title}</h3>
              <ul>
                {col.links
                  ? col.links.map((l) => <li key={l.label}><a href={l.href}>{l.label}</a></li>)
                  : col.items.map((i) => <li key={i}>{i}</li>)}
              </ul>
            </nav>
          ))}
        </div>
        <div className="footer__bottom">
          <p>© {new Date().getFullYear()} {footer.brand}</p>
          <p>{footer.legal}</p>
        </div>
      </Container>
    </footer>
  )
}
