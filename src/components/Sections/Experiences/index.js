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

const Experiences = ({ id, topLine, description }) => {
  return (
    <InfoContainer id={id}>
      <InfoWrapper>
        <InfoRow>
          <Column1>
            <TextWrapper>
              <TopLine>Mes expériences professionnelles</TopLine>
              <Heading>Digitales</Heading>
              <ul>
                <li>FREELANCE</li>
                <li>
                  CONSULTANTE EN TRANSFORMATION DIGITALE & DEVELOPPEUSE WEB
                </li>
                <li>PRODUCT OWNER</li>
                <li>PRODUCT OWNER & SCRUM MASTER</li>
                <li>DEVELOPPEUSE WEB & CHEF DE PROJET</li>
              </ul>
            </TextWrapper>
          </Column1>
          <Column2>
            <h3>DEVELOPPEUSE WEB FREELANCE</h3>
            <Subtitle>
              Création d'application web (SaaS) sur mesure répondant aux besoins
              de diverses PME entammant leur transformation digitale (BTP,
              organismes de formation). Analyse des besoins et de l'existant,
              développement en mode agile.
            </Subtitle>
          </Column2>
        </InfoRow>
      </InfoWrapper>
    </InfoContainer>
  )
}

export default Experiences
