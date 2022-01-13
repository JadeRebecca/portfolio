import React from 'react'

import {
  HeroContainer,
  HeroContent,
  HeroS1,
  HeroS2,
  HeroS3,
  HeroS4,
} from './HeroElements'

const HeroSection = () => {
  return (
    <HeroContainer>
      <HeroContent>
        <p>
          <HeroS1>Bonjour, je m'appelle</HeroS1>
        </p>
        <p>
          <HeroS2>Jade Dupont.</HeroS2>
        </p>
        <p>
          <HeroS2>Je suis une développeuse web passionnée.</HeroS2>
        </p>
        <p>
          <HeroS3>
            J'ai 11 ans d'expérience digitale hybride
            <HeroS4> tech </HeroS4>& <HeroS4>produit. </HeroS4>
          </HeroS3>
        </p>
      </HeroContent>
    </HeroContainer>
  )
}

export default HeroSection
