import React, { useState } from 'react'
import ExperiencesGroup from './ExperiencesGroup'
import {
  InfoContainer,
  InfoWrapper,
  TextWrapper,
  Title,
  SubTitle,
} from '../SectionElements'
import {
  ExperienceContainer,
  BtnContainer,
  CompanyContainer,
  DetailContainer,
  Type,
  TypeWrapper,
  CompanyList,
  CompanyItem,
  CompanyLink,
  Period,
  Description,
  DescriptionItem,
} from './ExperiencesElements'

import Btn from '../../Button'

import { experiences } from './Data'

const Experiences = () => {
  const [isVisible, setIsVisible] = useState(false)

  const showHandler = () => {
    setIsVisible((current) => !current)
  }

  // const [info, setInfo] = useState({
  //   id: experiences[0].id,
  //   period: experiences[0].period,
  //   title: experiences[0].title,
  //   company: experiences[0].company,
  //   description: experiences[0].description,
  //   website: experiences[0].website,
  // })

  const digitalExperiences = experiences.filter((item) => item.type === 1)

  // const digitalCompanyList = digitalExperiences.map((item) => (
  //   <CompanyItem
  //     className={info.id === item.id && 'active'}
  //     key={item.id}
  //     onClick={() => {
  //       setInfo({
  //         id: item.id,
  //         period: item.period,
  //         title: item.title,
  //         company: item.company,
  //         description: item.description,
  //         website: item.website,
  //       })
  //     }}
  //   >
  //     {item.company}
  //   </CompanyItem>
  // ))

  const otherExperiences = experiences.filter((item) => item.type === 2)

  // const otherCompanyList = otherExperiences.map((item) => (
  //   <CompanyItem
  //     className={info.id === item.id && 'active'}
  //     key={item.id}
  //     onClick={() => {
  //       setInfo({
  //         id: item.id,
  //         period: item.period,
  //         title: item.title,
  //         company: item.company,
  //         description: item.description,
  //         website: item.website,
  //       })
  //     }}
  //   >
  //     {item.company}
  //   </CompanyItem>
  // ))

  return (
    <InfoContainer id="experiences">
      <InfoWrapper>
        <Title className="left">01. Mes expériences professionnelles</Title>
        <ExperiencesGroup
          category="Digitales"
          data={digitalExperiences}
          display={true}
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
        />
      </InfoWrapper>
    </InfoContainer>
  )
}

export default Experiences
