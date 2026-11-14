import Section from '../../components/layout/Section'
import SectionHeader from '../../components/ui/SectionHeader'
import { testimonials } from '../../data/sections'
import './Testimonials.css'

export default function Testimonials() {
  return (
    <Section id="testimonios" tone="warm" labelledBy="testimonios-title">
      <SectionHeader
        id="testimonios-title"
        eyebrow={testimonials.eyebrow}
        title={testimonials.title}
        subtitle={testimonials.subtitle}
      />
      <div className="testimonials">
        {testimonials.items.map((t) => (
          <figure className="testimonial" key={t.name}>
            <blockquote className="testimonial__quote">{t.quote}</blockquote>
            <figcaption className="testimonial__author">
              <span className="testimonial__avatar" aria-hidden="true">{t.initials}</span>
              <span>
                <span className="testimonial__name">{t.name}</span>
                <span className="testimonial__role">{t.role}</span>
              </span>
            </figcaption>
          </figure>
        ))}
      </div>
    </Section>
  )
}
