import { dashboard } from '../../data/hero'

export default function DashboardVisual() {
  const { patient, appointment, flow, reminder } = dashboard
  return (
    <div className="dash" aria-hidden="true">
      <div className="dash__card dash__card--main">
        <div className="dash__avatar">🐱</div>
        <div>
          <p className="dash__name">{patient.name}</p>
          <p className="dash__muted">{patient.detail}</p>
        </div>
        <span className="dash__badge">{patient.status}</span>
      </div>

      <div className="dash__card dash__card--appt">
        <p className="dash__muted">{appointment.title}</p>
        <p className="dash__strong">{appointment.when}</p>
        <p className="dash__muted">{appointment.service}</p>
      </div>

      <div className="dash__card dash__card--flow">
        <p className="dash__muted">Seguimiento</p>
        <ul>
          {flow.map((s) => (
            <li key={s.label} className={s.done ? 'is-done' : ''}>
              <span className="dash__dot" />
              {s.label}
            </li>
          ))}
        </ul>
      </div>

      <div className="dash__card dash__card--msg">
        <p className="dash__channel">{reminder.channel}</p>
        <p>{reminder.text}</p>
      </div>
    </div>
  )
}
