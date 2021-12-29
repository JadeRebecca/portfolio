import React, { useState } from 'react'
import Sidebar from '../components/Sidebar'
import Navbar from '../components/Navbar'
import HeroSection from '../components/HeroSection'
import Footer from '../components/Footer'
import InfoSection from '../components/InfoSection'
import {
  about,
  experiences,
  work,
  contact,
} from '../components/InfoSection/Data'

const Home = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => {
    setIsOpen(!isOpen)
  }
  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <HeroSection />
      <InfoSection {...about} />
      <InfoSection {...experiences} />
      <InfoSection {...work} />
      <InfoSection {...contact} />
      <Footer />
    </>
  )
}

export default Home
