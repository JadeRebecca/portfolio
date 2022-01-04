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

const Skills = () => {
  return (
    <InfoContainer id="skills">
      <InfoWrapper>
        <Title className="right">03. Mes compétences</Title>
        <InfoRow>
          <Column1>
            <TextWrapper>
              <h3>Hard skills</h3>
              <Subtitle>
                FRONT-END : HTML, CSS, Bootstrap, Material UI, Javascript/
                React.
                <br />
                BACK-END : Node.js, PHP, Python/Django&Flask, SQL. ORGANISATION
                & STRATEGIE : Méthode Scrum, Kanban, OKR, vision produit,
                réalisation de roadmap
              </Subtitle>
            </TextWrapper>
          </Column1>
          <Column2>
            <h3>Soft skills</h3>
            <Subtitle>
              STRATEGIE : Méthode Scrum, Kanban, OKR, vision produit,
              réalisation de roadmap REDACTIONNELLES : expression des besoins,
              cahier des charges, user story, manuel utilisateur, support de
              formation, manuel scolaire. OUTILS : VSCode, Git/GitHub, Jira,
              Azure DevOps, Trello, Google Analytics. RELATIONNELLES : support,
              formation, accompagnement, assistance, dépannage des utilisateurs.
              Pilotage de projet, gestion de petite équipe. LINGUISTIQUES :
              anglais niveau intermédiaire
            </Subtitle>
          </Column2>
        </InfoRow>
      </InfoWrapper>
    </InfoContainer>
  )
}

export default Skills
