import './Card.css'

export default function Card({ icon, title, children, as: Tag = 'article' }) {
  return (
    <Tag className="card">
      {icon && <span className="card__icon" aria-hidden="true">{icon}</span>}
      <h3 className="card__title">{title}</h3>
      <p className="card__text">{children}</p>
    </Tag>
  )
}
