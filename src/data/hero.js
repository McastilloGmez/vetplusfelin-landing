export const hero = {
  eyebrow: 'Veterinaria · Peluquería · Nutrición',
  title: 'La salud de tu mascota, en manos que la cuidan como tú.',
  subtitle:
    'Atención veterinaria cercana, peluquería y los mejores alimentos del mercado, todo en un solo lugar. Reserva en minutos y duerme tranquilo.',
  offer: 'Primera atención con 20% de descuento',
  primaryCta: { label: 'Reserva una hora', href: '#reserva' },
  secondaryCta: { label: 'Así trabajamos', href: '#como-trabajamos' },
  note: 'Sin esperas largas · Recordatorios por email o WhatsApp',
}

// Tarjetas del visual tipo dashboard (contenido ficticio)
export const dashboard = {
  patient: { name: 'Luna', detail: 'Gata · 3 años · Control anual', status: 'Saludable' },
  appointment: { title: 'Próxima cita', when: 'Jue 14 · 10:30', service: 'Consulta general' },
  flow: [
    { label: 'Hora reservada', done: true },
    { label: 'Recordatorio enviado', done: true },
    { label: 'Atención en clínica', done: false },
  ],
  reminder: { channel: 'WhatsApp', text: 'Tu cita con Luna es mañana a las 10:30' },
}

export const metrics = [
  { value: '+3.500', label: 'mascotas atendidas' },
  { value: '4,9/5', label: 'valoración de dueños' },
  { value: '15 min', label: 'tiempo medio de espera' },
  { value: '+12', label: 'especies que cuidamos' },
]
