import React from 'react'
import { Btn } from './ButtonElements'

const ButtonLink = ({ href, text }) => {
  return (
    <Btn href={href} target="_blank">
      {text}
    </Btn>
  )
}

export default ButtonLink
