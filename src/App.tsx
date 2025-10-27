import './App.css'
import Assets from './assets/assets'
import AccessCard from './components/accessCard'
import Features from './components/features'
import Footer from './components/footer'
import Hero from './components/hero'
import Navbar from './components/navbar'
import Productivity from './components/productivity'
import Testimonials from './components/testimonials'
import { accessCard, heroDesc, heroText, productivity } from './utils/data'

const App = () => {

  return (
    <div className="bg-mainBg ">
      <div className='fylo-container'>
        <Navbar />
        <Hero heroBg={Assets?.heroWave} heroImg={Assets?.heroIllus} head={heroText} desc={heroDesc} />
        <Features />
        <Productivity productiveImg={Assets?.productive} head={productivity?.head} desc={productivity?.desc} btnLabel='See how fylo works' linkBtnArr={Assets?.linkBtnArr} />
        <Testimonials />
        <AccessCard head={accessCard?.head} desc={accessCard?.desc} />
        <Footer />
      </div>
    </div>

  )
}

export default App
