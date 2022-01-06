import React from 'react'

import {
  HeroContainer,
  HeroContent,
  HeroP1,
  HeroP2,
  HeroP3,
} from './HeroElements'

const HeroSection = () => {
  return (
    <HeroContainer>
      <HeroContent>
        <p>
          <HeroP1>Bonjour, je m'appelle</HeroP1>
        </p>
        <p>
          <HeroP2>Jade Dupont.</HeroP2>
        </p>
        <p>
          <HeroP2>Je suis une développeuse web passionnée.</HeroP2>
        </p>
        <p>
          <HeroP3>
            J'ai 11 ans d'expérience digitale hybride tech & produit.
          </HeroP3>
        </p>
      </HeroContent>
    </HeroContainer>
  )
}

export default HeroSection
