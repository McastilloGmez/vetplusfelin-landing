import Container from './Container'
import Reveal from '../ui/Reveal'
import './Section.css'

// Envoltorio de sección: padding vertical, ancla (id), tono de fondo ('default' | 'soft' | 'warm' | 'mint')
// y animación de entrada al hacer scroll.
export default function Section({ id, tone = 'default', labelledBy, children }) {
  return (
    <section id={id} className={`section section--${tone}`} aria-labelledby={labelledBy}>
      <Container>
        <Reveal>{children}</Reveal>
      </Container>
    </section>
  )
}
