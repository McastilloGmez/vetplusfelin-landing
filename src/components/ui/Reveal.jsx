import { useReveal } from '../../hooks/useReveal'
import './Reveal.css'

// Envuelve contenido y lo muestra con un fade + desplazamiento suave al entrar en pantalla.
export default function Reveal({ as: Tag = 'div', children }) {
  const [ref, visible] = useReveal()
  return (
    <Tag ref={ref} className={`reveal${visible ? ' is-visible' : ''}`}>
      {children}
    </Tag>
  )
}
