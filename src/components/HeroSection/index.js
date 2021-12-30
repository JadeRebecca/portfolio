import React from 'react'

import {
  HeroContainer,
  HeroContent,
  HeroH1,
  HeroP1,
  HeroP2,
} from './HeroElements'

const HeroSection = () => {
  return (
    <HeroContainer>
      <HeroContent>
        <HeroP1>Bonjour, je m'appelle</HeroP1>
        <HeroH1>Jade Dupont.</HeroH1>
        <HeroH1>Je suis une développeuse web passionnée.</HeroH1>
        <HeroP2>
          J'ai 11 ans d'expérience digitale hybride tech & produit.
        </HeroP2>
      </HeroContent>
    </HeroContainer>
  )
}

export default HeroSection
