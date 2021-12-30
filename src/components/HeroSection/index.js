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
        <HeroP1>Hi, my name is</HeroP1>
        <HeroH1>Jade Dupont.</HeroH1>
        <HeroH1>I'm a passionnated web developer.</HeroH1>
        <HeroP2>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </HeroP2>
      </HeroContent>
    </HeroContainer>
  )
}

export default HeroSection
