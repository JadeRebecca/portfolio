import React, { useState } from 'react'
import {
  InfoContainer,
  InfoWrapper,
  TextWrapper,
  Title,
} from '../SectionElements'
import {
  ExperienceContainer,
  CompanyContainer,
  DetailContainer,
  Type,
  TypeWrapper,
  CompanyList,
  CompanyItem,
  Title as ExperienceTitle,
  CompanyLink,
  Period,
  Description,
  DescriptionItem,
} from './ExperiencesElements'

import { experiences } from './Data'

const Experiences = () => {
  const [info, setInfo] = useState({
    id: experiences[0].id,
    period: experiences[0].period,
    title: experiences[0].title,
    company: experiences[0].company,
    description: experiences[0].description,
    website: experiences[0].website,
  })

  const companyList = experiences.map((item) => (
    <CompanyItem
      className={info.id === item.id && 'active'}
      key={item.id}
      onClick={() => {
        setInfo({
          id: item.id,
          period: item.period,
          title: item.title,
          company: item.company,
          description: item.description,
          website: item.website,
        })
      }}
    >
      {item.company}
    </CompanyItem>
  ))

  return (
    <InfoContainer id="experiences">
      <InfoWrapper>
        <Title className="left">01. Mes expériences professionnelles</Title>
        <ExperienceContainer>
          <CompanyContainer>
            <TextWrapper>
              <TypeWrapper>
                <Type>Digitales</Type>
                {/* <Type>Autres</Type> */}
              </TypeWrapper>
              <CompanyList>{companyList}</CompanyList>
            </TextWrapper>
          </CompanyContainer>
          <DetailContainer>
            <ExperienceTitle>
              {info.title}{' '}
              <CompanyLink href={info.website} target="_blank">
                @{info.company}
              </CompanyLink>
            </ExperienceTitle>
            <Period>{info.period}</Period>
            <Description>
              {info.description.map((item, index) => (
                <DescriptionItem key={index}>{item}</DescriptionItem>
              ))}
            </Description>
          </DetailContainer>
        </ExperienceContainer>
      </InfoWrapper>
    </InfoContainer>
  )
}

export default Experiences
