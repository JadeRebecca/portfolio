import React from 'react'
import { Btn } from './ButtonElements'

const ButtonLink = ({ href, text, icon }) => {
  const content = icon ?? text

  return (
    <Btn href={href} target="_blank" className={icon ? 'icon' : ''}>
      {content}
    </Btn>
  )
}

export default ButtonLink
