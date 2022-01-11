import React from 'react'
import {
  InfoContainer,
  InfoWrapper,
  InfoRow,
  Column1,
  TextWrapper,
  Title,
  Description,
  Forth,
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
              <Description>
                <Forth>Autonome</Forth> et polyvalente, j'ai une bonne capacité
                d'adaptation. Je sais être <Forth>pédagogue</Forth>, patiente et
                avoir le sens de l'écoute. J'ai l'esprit d'équipe et favorise l'
                <Forth>intelligence collective</Forth>. Dotée d'un esprit
                créatif et en <Forth>perpétuel apprentissage</Forth>, j'aime
                aborder de nouveaux projets.
              </Description>
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
