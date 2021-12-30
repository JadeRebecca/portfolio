import React from 'react'
import { FooterContainer, Link } from './FooterElements'

const Footer = () => {
  const handleClick = () => {
    window.open('https://github.com/JadeRebecca/portfolio')
  }
  return (
    <FooterContainer>
      <Link onClick={handleClick}>Build by Jade Dupont with React JS</Link>
    </FooterContainer>
  )
}

export default Footer
