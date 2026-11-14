import Container from './Container'
import './Section.css'

// Envoltorio de sección: padding vertical, ancla (id) y tono de fondo ('default' | 'soft').
export default function Section({ id, tone = 'default', labelledBy, children }) {
  return (
    <section id={id} className={`section section--${tone}`} aria-labelledby={labelledBy}>
      <Container>{children}</Container>
    </section>
  )
}
