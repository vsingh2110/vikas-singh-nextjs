import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import Skills from './components/Skills'
import Journey from './components/Journey'
import Achievements from './components/Achievements'
import NonProfitWork from './components/NonProfitWork'
import SocialActivities from './components/SocialActivities'
import Projects from './components/Projects'
import Teams from './components/Teams'
import Contact from './components/Contact'
import SocialLinks from './components/SocialLinks'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Skills />
      <Journey />
      <Achievements />
      <NonProfitWork />
      <SocialActivities />
      <Projects />
      <Teams />
      <Contact />
      <SocialLinks />
      <Footer />
      <ScrollToTop />
    </>
  )
}
