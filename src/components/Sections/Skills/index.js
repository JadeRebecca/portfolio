import React from 'react'
import { InfoContainer, InfoWrapper, Title } from '../SectionElements'
import {
  SkillsContainer,
  SkillCol,
  CategoryTitle,
  SkillsDescription,
} from './SkillsElements'
// import strategyIcon from '../../images/icons/strategy.png'

const Skills = () => {
  return (
    <InfoContainer id="skills">
      <InfoWrapper>
        <Title className="right">03. Mes compétences</Title>
        <SkillsContainer>
          <SkillCol>
            <CategoryTitle>Tech</CategoryTitle>
            <SkillsDescription>
              FRONT-END : HTML, CSS, Bootstrap, Material UI, Javascript/ React.
              <br />
              BACK-END : Node.js, PHP, Python/Django&Flask, SQL.
            </SkillsDescription>
          </SkillCol>
          <SkillCol>
            <CategoryTitle>ORGANISATION & STRATEGIE</CategoryTitle>
            <SkillsDescription>
              Méthode Scrum, Kanban, OKR, vision produit, réalisation de
              roadmap, préparation et animation des cérénomies Agiles OUTILS :
              VSCode, Git/GitHub, Jira, Azure DevOps, Trello, Google Analytics.
            </SkillsDescription>
          </SkillCol>
          <SkillCol>
            <CategoryTitle>COMMUNICATION & REDACTION</CategoryTitle>
            <SkillsDescription>
              demo scrum, expression des besoins, cahier des charges, user
              story, manuel utilisateur, support de formation, manuel scolaire.
            </SkillsDescription>
          </SkillCol>
          <SkillCol>
            <CategoryTitle>Soft skills</CategoryTitle>
            <SkillsDescription>
              +sport & yoga +cours part, coaching RELATIONNELLES : support,
              formation, accompagnement, assistance, dépannage des utilisateurs.
              Pilotage de projet, gestion de petite équipe. LINGUISTIQUES :
              anglais niveau intermédiaire
            </SkillsDescription>
          </SkillCol>
        </SkillsContainer>
      </InfoWrapper>
    </InfoContainer>
  )
}

export default Skills
