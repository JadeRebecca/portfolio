import React, { useState, useEffect } from 'react'
import { useIntersection } from '../../../hooks/useIntersection'
import { useRef } from 'react'
import { InfoContainer, InfoWrapper, Title, SubTitle } from '../SectionElements'
import { SkillsContainer, SkillCol, SkillsDescription } from './SkillsElements'
// import strategyIcon from '../../images/icons/strategy.png'

const Skills = () => {
  const [animation, setAnimation] = useState(false)
  const ref = useRef()
  const inViewport = useIntersection(ref, '0px 0px -500px 0px')

  useEffect(() => {
    if (inViewport) {
      //console.log('in viewport:', ref.current)
      setAnimation(true)
    }
  }, [inViewport])

  return (
    <InfoContainer id="skills" ref={ref}>
      <InfoWrapper>
        <Title className="right">03. Mes compétences</Title>
        <SkillsContainer className={animation ? 'goAnimation' : 'hidden'}>
          <SkillCol>
            <SubTitle className="underline">Tech</SubTitle>
            <SkillsDescription>
              FRONT-END : HTML, CSS, Bootstrap, Material UI, Javascript/ React.
              <br />
              BACK-END : Node.js, PHP, Python/Django&Flask, SQL.
            </SkillsDescription>
          </SkillCol>
          <SkillCol>
            <SubTitle className="underline">ORGANISATION & STRATEGIE</SubTitle>
            <SkillsDescription>
              Méthode Scrum, Kanban, OKR, vision produit, réalisation de
              roadmap, préparation et animation des cérénomies Agiles OUTILS :
              VSCode, Git/GitHub, Jira, Azure DevOps, Trello, Google Analytics.
            </SkillsDescription>
          </SkillCol>
          <SkillCol>
            <SubTitle className="underline">COMMUNICATION & REDACTION</SubTitle>
            <SkillsDescription>
              demo scrum, expression des besoins, cahier des charges, user
              story, manuel utilisateur, support de formation, manuel scolaire.
            </SkillsDescription>
          </SkillCol>
          <SkillCol>
            <SubTitle className="underline">Soft skills</SubTitle>
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
