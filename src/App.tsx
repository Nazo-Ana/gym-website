import { Navigation } from './components/Navigation'
import { Hero } from './components/Hero'
import { Services } from './components/Services'
import { Pricing } from './components/Pricing'
import { Testimonials } from './components/Testimonials'
import { Footer } from './components/Footer'
import { ThreeBackground } from './components/ThreeBackground'
import './styles/globals.css'

export default function App() {
  return (
    <>
      <ThreeBackground />
      <Navigation />
      <Hero />
      <Services />
      <Pricing />
      <Testimonials />
      <Footer />
    </>
  )
}
