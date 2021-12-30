import React from 'react'
import { Button } from 'react-scroll'
import {
  InfoContainer,
  InfoWrapper,
  InfoRow,
  Column1,
  TextWrapper,
  TopLine,
  Heading,
  Subtitle,
  BtnWrap,
  Column2,
  ImgWrap,
  Img,
} from '../SectionElements'
import Btn from '../../Button'
import img from '../../../images/contact.svg'

const Contact = ({ id, topLine, description }) => {
  return (
    <InfoContainer id={id}>
      <InfoWrapper>
        <InfoRow>
          <Column1>
            <TextWrapper>
              <TopLine>{topLine}</TopLine>
              <Heading>Heading</Heading>
              <Subtitle>{description}</Subtitle>
              <Btn
                href="mailto:dupont.jade@gmail.com"
                target="_blank"
                text="contact me!"
              />
            </TextWrapper>
          </Column1>
          <Column2>
            <ImgWrap>
              <Img src={img} alt="contact" />
            </ImgWrap>
          </Column2>
        </InfoRow>
      </InfoWrapper>
    </InfoContainer>
  )
}

export default Contact
