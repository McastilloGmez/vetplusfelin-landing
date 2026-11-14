import Section from '../components/layout/Section'
import SectionHeader from '../components/ui/SectionHeader'
import Card from '../components/ui/Card'
import './CardGridSection.css'

// Sección genérica: encabezado + cuadrícula de tarjetas. Problemas, Beneficios y Especialidades la reutilizan.
export default function CardGridSection({ id, tone, content, columns = 3 }) {
  const titleId = `${id}-title`
  return (
    <Section id={id} tone={tone} labelledBy={titleId}>
      <SectionHeader id={titleId} eyebrow={content.eyebrow} title={content.title} subtitle={content.subtitle} />
      <div className={`card-grid card-grid--${columns}`}>
        {content.items.map((item) => (
          <Card key={item.title} icon={item.icon} title={item.title}>{item.text}</Card>
        ))}
      </div>
    </Section>
  )
}
