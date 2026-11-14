import Section from '../../components/layout/Section'
import SectionHeader from '../../components/ui/SectionHeader'
import { faq } from '../../data/sections'
import './Faq.css'

// Acordeón nativo con <details>: accesible y sin JavaScript.
export default function Faq() {
  const titleId = `${faq.id}-title`
  return (
    <Section id={faq.id} tone="mint" labelledBy={titleId}>
      <SectionHeader id={titleId} eyebrow={faq.eyebrow} title={faq.title} subtitle={faq.subtitle} />
      <div className="faq">
        {faq.items.map((item) => (
          <details className="faq__item" key={item.q}>
            <summary className="faq__question">{item.q}</summary>
            <p className="faq__answer">{item.a}</p>
          </details>
        ))}
      </div>
    </Section>
  )
}
