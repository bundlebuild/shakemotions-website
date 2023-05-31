import Image from 'next/image'
import styles from './page.module.css'
import Header from './components/Header'
import Hero from './components/Hero'
import ScrollObserver from './utils/scroll-observer'
import HowItWorksV2 from './components/HowItWorksv2'
import WorkWillAmaze from './components/WorkWillAmaze'
import OurWorks from './components/OurWork'
import OurRecentVideos from './components/OurRecentVideos'
import Contact from './components/Contact'

export default function Home() {
  return (
    <ScrollObserver>
      <Header />
      <Hero />
      <HowItWorksV2 />
      <WorkWillAmaze />
      <OurRecentVideos />
      <OurWorks />
      <Contact />
    </ScrollObserver>
  )
}
