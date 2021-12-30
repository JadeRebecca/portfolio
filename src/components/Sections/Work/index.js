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
import img from '../../../images/remote.svg'

const Work = ({ id, topLine, description }) => {
  return (
    <InfoContainer id={id}>
      <InfoWrapper>
        <InfoRow>
          <Column1>
            <TextWrapper>
              <TopLine>Mes réalisations</TopLine>
              <Heading>Heading</Heading>
              <Subtitle>{description}</Subtitle>
            </TextWrapper>
          </Column1>
          <Column2>
            <ImgWrap>
              <Img src={img} alt="digital work" />
            </ImgWrap>
          </Column2>
        </InfoRow>
      </InfoWrapper>
    </InfoContainer>
  )
}

export default Work
