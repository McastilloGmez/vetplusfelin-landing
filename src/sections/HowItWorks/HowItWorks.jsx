import Section from '../../components/layout/Section'
import SectionHeader from '../../components/ui/SectionHeader'
import { steps } from '../../data/sections'
import './HowItWorks.css'

export default function HowItWorks() {
  const titleId = `${steps.id}-title`
  return (
    <Section id={steps.id} tone="warm" labelledBy={titleId}>
      <SectionHeader id={titleId} eyebrow={steps.eyebrow} title={steps.title} subtitle={steps.subtitle} />
      <ol className="steps">
        {steps.items.map((s) => (
          <li className="step" key={s.n}>
            <span className="step__number">{s.n}</span>
            <h3 className="step__title">{s.title}</h3>
            <p className="step__text">{s.text}</p>
            <ul className="step__tags">
              {s.tags.map((t) => <li key={t}>{t}</li>)}
            </ul>
          </li>
        ))}
      </ol>
    </Section>
  )
}
