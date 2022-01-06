import React, { useState, useEffect } from 'react'
import { useIntersection } from '../../../hooks/useIntersection'
import { useRef } from 'react'
import { InfoContainer, InfoWrapper, Title, SubTitle } from '../SectionElements'
import {
  SkillsContainer,
  SkillCol,
  SkillsDescription,
  Skill,
} from './SkillsElements'
import SkillItem from './SkillItem'
import { works } from './Data'
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
          {works.map((item) => (
            <SkillItem item={item} />
          ))}
        </SkillsContainer>
      </InfoWrapper>
    </InfoContainer>
  )
}

export default Skills
