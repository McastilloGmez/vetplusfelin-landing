// Contenido del CTA final y del footer (ficticio, sin datos de contacto reales).

export const finalCta = {
  id: 'reserva',
  title: 'Tu mascota merece una atención que te dé tranquilidad',
  subtitle: 'Reserva una hora y recibe 20% de descuento en su primera atención.',
  cta: { label: 'Reserva una hora', href: '#reserva' },
  note: 'Sin compromiso · Confirmación al instante',
}

export const footer = {
  brand: 'VetPlusFelin',
  tagline: 'Atención veterinaria, peluquería y alimentos saludables para quienes cuidan a sus animales.',
  columns: [
    {
      title: 'Explora',
      links: [
        { label: 'Beneficios', href: '#beneficios' },
        { label: 'Así trabajamos', href: '#como-trabajamos' },
        { label: 'Especialidades', href: '#especialidades' },
        { label: 'Testimonios', href: '#testimonios' },
        { label: 'Preguntas frecuentes', href: '#faq' },
      ],
    },
    {
      title: 'Servicios',
      items: ['Medicina veterinaria', 'Peluquería', 'Alimentos saludables', 'Insumos veterinarios', 'Ganado y animales mayores'],
    },
    {
      title: 'Horario',
      items: ['Lunes a viernes: 9:00 – 19:00', 'Sábado: 10:00 – 15:00', 'Domingo: cerrado'],
    },
  ],
  legal: 'Sitio ficticio con fines demostrativos. Ningún dato ni formulario está conectado a servicios reales.',
}
