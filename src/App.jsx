import Hero from './sections/Hero/Hero'
import Metrics from './sections/Metrics/Metrics'

// Composición de la landing. Las siguientes secciones se montarán aquí.
export default function App() {
  return (
    <main id="top">
      <Hero />
      <Metrics />
    </main>
  )
}
