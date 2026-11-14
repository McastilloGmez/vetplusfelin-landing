import Container from '../../components/layout/Container'
import Button from '../../components/ui/Button'
import Reveal from '../../components/ui/Reveal'
import { finalCta } from '../../data/closing'
import './FinalCta.css'

export default function FinalCta() {
  return (
    <section id={finalCta.id} className="final-cta" aria-labelledby="final-cta-title">
      <Container>
        <Reveal>
          <div className="final-cta__box">
            <h2 id="final-cta-title" className="final-cta__title">{finalCta.title}</h2>
            <p className="final-cta__subtitle">{finalCta.subtitle}</p>
            <Button variant="light" href={finalCta.cta.href}>{finalCta.cta.label}</Button>
            <p className="final-cta__note">{finalCta.note}</p>
          </div>
        </Reveal>
      </Container>
    </section>
  )
}
