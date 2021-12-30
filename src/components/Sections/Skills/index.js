import React from 'react'
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

const Skills = ({ id, topLine, description }) => {
  return (
    <InfoContainer id="skills">
      <InfoWrapper>
        <InfoRow>
          <Column1>
            <TextWrapper>
              <TopLine>Mes compétences</TopLine>
              {/* <Heading>Heading</Heading> */}
              <Subtitle>
                FRONT-END : HTML, CSS, Bootstrap, Material UI, Javascript/
                React. BACK-END : Node.js, PHP, Python/Django&Flask, SQL.
                ORGANISATION & STRATEGIE : Méthode Scrum, Kanban, OKR, vision
                produit, réalisation de roadmap REDACTIONNELLES : expression des
                besoins, cahier des charges, user story, manuel utilisateur,
                support de formation, manuel scolaire. OUTILS : VSCode,
                Git/GitHub, Jira, Azure DevOps, Trello, Google Analytics.
                RELATIONNELLES : support, formation, accompagnement, assistance,
                dépannage des utilisateurs. Pilotage de projet, gestion de
                petite équipe. LINGUISTIQUES : anglais niveau intermédiaire
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

export default Skills
