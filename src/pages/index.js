import React, { useState } from 'react'
import Sidebar from '../components/Sidebar'
import Navbar from '../components/Navbar'
import HeroSection from '../components/HeroSection'
import Footer from '../components/Footer'
import About from '../components/Sections/About'
import Experiences from '../components/Sections/Experiences'
import Work from '../components/Sections/Work'
import Contact from '../components/Sections/Contact'
import { about, experiences, work, contact } from '../components/Sections/Data'

const Home = ({ theme, themeToggler }) => {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => {
    setIsOpen(!isOpen)
  }
  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} theme={theme} themeToggler={themeToggler} />
      <HeroSection />
      <About {...about} />
      <Experiences {...experiences} />
      <Work {...work} />
      <Contact {...contact} />
      <Footer />
    </>
  )
}

export default Home
