import Header from './components/layout/Header'
import Hero from './sections/Hero/Hero'
import Metrics from './sections/Metrics/Metrics'
import Problems from './sections/Problems/Problems'
import Benefits from './sections/Benefits/Benefits'
import HowItWorks from './sections/HowItWorks/HowItWorks'
import Specialties from './sections/Specialties/Specialties'
import Testimonials from './sections/Testimonials/Testimonials'
import Faq from './sections/Faq/Faq'
import FinalCta from './sections/FinalCta/FinalCta'
import Footer from './sections/Footer/Footer'

// Composición de la landing. Las siguientes secciones se montarán aquí.
export default function App() {
  return (
    <>
      <Header />
      <main id="top">
        <Hero />
        <Metrics />
        <Problems />
        <Benefits />
        <HowItWorks />
        <Specialties />
        <Testimonials />
        <Faq />
        <FinalCta />
      </main>
      <Footer />
    </>
  )
}
