import './SectionHeader.css'

export default function SectionHeader({ id, eyebrow, title, subtitle }) {
  return (
    <header className="section-header">
      {eyebrow && <p className="section-header__eyebrow">{eyebrow}</p>}
      <h2 id={id} className="section-header__title">{title}</h2>
      {subtitle && <p className="section-header__subtitle">{subtitle}</p>}
    </header>
  )
}
