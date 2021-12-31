import React, { useState } from 'react'
import {
  InfoContainer,
  InfoWrapper,
  InfoRow,
  Column1,
  TextWrapper,
  Title,
  Heading,
  Subtitle,
  Column2,
} from '../SectionElements'
import {
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
        <InfoRow>
          <Column1>
            <TextWrapper>
              <Title>Mes expériences professionnelles</Title>
              <Heading>Digitales</Heading>
              <CompanyList>{companyList}</CompanyList>
            </TextWrapper>
          </Column1>
          <Column2>
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
          </Column2>
        </InfoRow>
      </InfoWrapper>
    </InfoContainer>
  )
}

export default Experiences
