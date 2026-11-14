import Hero from './sections/Hero/Hero'
import Metrics from './sections/Metrics/Metrics'
import Problems from './sections/Problems/Problems'
import Benefits from './sections/Benefits/Benefits'
import HowItWorks from './sections/HowItWorks/HowItWorks'
import Specialties from './sections/Specialties/Specialties'

// Composición de la landing. Las siguientes secciones se montarán aquí.
export default function App() {
  return (
    <main id="top">
      <Hero />
      <Metrics />
      <Problems />
      <Benefits />
      <HowItWorks />
      <Specialties />
    </main>
  )
}
