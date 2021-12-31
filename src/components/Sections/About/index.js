import React from 'react'
import {
  InfoContainer,
  InfoWrapper,
  InfoRow,
  Column1,
  TextWrapper,
  Title,
  Subtitle,
  Column2,
  ImgWrap,
  Img,
} from '../SectionElements'
import img from '../../../images/remote.svg'

const About = () => {
  return (
    <InfoContainer id="about">
      <InfoWrapper>
        <InfoRow>
          <Column1>
            <TextWrapper>
              <Title>A propos de moi</Title>
              <Subtitle>
                Autonome et polyvalente, j'ai une bonne capacité d'adaptation.
                Je sais être pédagogue, patiente et avoir le sens de l'écoute,
                J'ai l'esprit d'équipe et favorise l'intelligence collective.
                Dotée d'un esprit créatif et désireuse d'apprendre, j'aime
                aborder de nouveaux projets.
              </Subtitle>
            </TextWrapper>
          </Column1>
          <Column2>
            <ImgWrap>
              <Img src={img} alt="remote worker" />
            </ImgWrap>
          </Column2>
        </InfoRow>
      </InfoWrapper>
    </InfoContainer>
  )
}

export default About
