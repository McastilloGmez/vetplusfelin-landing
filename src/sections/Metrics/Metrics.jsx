import Container from '../../components/layout/Container'
import { metrics } from '../../data/hero'
import './Metrics.css'

export default function Metrics() {
  return (
    <section className="metrics" aria-label="Resultados de VetPlusFelin">
      <Container>
        <dl className="metrics__grid">
          {metrics.map((m) => (
            <div className="metrics__item" key={m.label}>
              <dt className="metrics__value">{m.value}</dt>
              <dd className="metrics__label">{m.label}</dd>
            </div>
          ))}
        </dl>
      </Container>
    </section>
  )
}
