import React from 'react'
import { Button } from 'react-scroll'
import {
  InfoContainer,
  InfoWrapper,
  InfoRow,
  Column1,
  TextWrapper,
  Title,
  Heading,
  Subtitle,
  Column2,
  ImgWrap,
  Img,
} from '../SectionElements'
import Btn from '../../Button'
import img from '../../../images/contact.svg'

const Contact = () => {
  return (
    <InfoContainer id="contact">
      <InfoWrapper>
        <Title>04. Contact</Title>
        <InfoRow>
          <Column1>
            <TextWrapper>
              <Heading>Heading</Heading>
              <Subtitle>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </Subtitle>
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
