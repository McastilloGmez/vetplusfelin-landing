import { useEffect, useRef, useState } from 'react'

// Devuelve [ref, visible]. `visible` pasa a true una sola vez, al entrar el elemento en pantalla.
// Con "reducir movimiento" o sin IntersectionObserver, el contenido se muestra de inmediato.
function shouldSkipAnimation() {
  return (
    typeof window === 'undefined' ||
    !('IntersectionObserver' in window) ||
    window.matchMedia('(prefers-reduced-motion: reduce)').matches
  )
}

export function useReveal() {
  const ref = useRef(null)
  const [visible, setVisible] = useState(shouldSkipAnimation)

  useEffect(() => {
    const el = ref.current
    if (visible || !el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.12, rootMargin: '0px 0px -8% 0px' },
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [visible])

  return [ref, visible]
}
