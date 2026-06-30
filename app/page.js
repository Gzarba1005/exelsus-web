import Header from '../components/Header'
import Hero from '../components/Hero'
import About from '../components/About'
import Differentiators from '../components/Differentiators'
import Paxman from '../components/Paxman'
import Team from '../components/Team'
import Services from '../components/Services'
import PatientSupport from '../components/PatientSupport'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import WhatsAppFloat from '../components/WhatsAppFloat'

export default function Home() {
  return (
    <div className="min-h-screen pb-48">
      <Header />
      <Hero />
      <About />
      <Differentiators />
      <Paxman />
      <Team />
      <Services />
      <PatientSupport />
      <Contact />
      <Footer />
      <WhatsAppFloat />
    </div>
  )
}