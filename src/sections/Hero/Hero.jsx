import Container from '../../components/layout/Container'
import Button from '../../components/ui/Button'
import { hero } from '../../data/hero'
import DashboardVisual from './DashboardVisual'
import './Hero.css'

export default function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <Container className="hero__grid">
        <div className="hero__content">
          <p className="hero__eyebrow">{hero.eyebrow}</p>
          <h1 id="hero-title" className="hero__title">{hero.title}</h1>
          <p className="hero__subtitle">{hero.subtitle}</p>
          <p className="hero__offer"><span>%</span>{hero.offer}</p>
          <div className="hero__actions">
            <Button href={hero.primaryCta.href}>{hero.primaryCta.label}</Button>
            <Button variant="secondary" href={hero.secondaryCta.href}>{hero.secondaryCta.label}</Button>
          </div>
          <p className="hero__note">{hero.note}</p>
        </div>
        <div className="hero__visual">
          <DashboardVisual />
        </div>
      </Container>
    </section>
  )
}
