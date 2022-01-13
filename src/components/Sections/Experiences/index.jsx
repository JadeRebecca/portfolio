import React, { useState } from 'react'
import ExperiencesGroup from './ExperiencesGroup'
import { InfoContainer, InfoWrapper, Title } from '../SectionElements'
import { BtnContainer } from './ExperiencesElements'

import Btn from '../../Button'

import { experiences } from './Data'

const Experiences = () => {
  const [isVisible, setIsVisible] = useState(false)

  const showHandler = () => {
    setIsVisible((current) => !current)
  }

  const digitalExperiences = experiences.filter((item) => item.type === 1)

  const otherExperiences = experiences.filter((item) => item.type === 2)

  return (
    <InfoContainer id="experiences">
      <InfoWrapper>
        <Title className="left">01. Mes expériences professionnelles</Title>
        <ExperiencesGroup
          category="Digitales"
          data={digitalExperiences}
          displayAlways={true}
        />
        <BtnContainer>
          <Btn
            onClick={showHandler}
            text={
              isVisible
                ? 'Cacher mes autres expériences'
                : 'Voir mes autres expériences'
            }
          />
        </BtnContainer>
        <ExperiencesGroup
          category="Autres"
          data={otherExperiences}
          display={isVisible}
          displayAlways={false}
        />
      </InfoWrapper>
    </InfoContainer>
  )
}

export default Experiences
