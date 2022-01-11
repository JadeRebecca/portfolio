import React, { useState, useEffect } from 'react'
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

const ExperiencesGroup = ({ category, data, display }) => {
  console.log(display)
  const [isVisible, setIsVisible] = useState(display)

  useEffect(() => {
    console.log('display change')
    setIsVisible(display)
  }, [display])

  const [info, setInfo] = useState({
    id: data[0].id,
    period: data[0].period,
    title: data[0].title,
    company: data[0].company,
    description: data[0].description,
    website: data[0].website,
  })

  const companyList = data.map((item) => (
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
    <ExperienceContainer className={isVisible ? 'goAnimation' : 'hidden'}>
      <CompanyContainer>
        <TextWrapper>
          <TypeWrapper>
            <Type>{category}</Type>
          </TypeWrapper>
          <CompanyList>{companyList}</CompanyList>
        </TextWrapper>
      </CompanyContainer>
      <DetailContainer>
        <SubTitle>
          {info.title}{' '}
          <CompanyLink href={info.website} target="_blank">
            @{info.company}
          </CompanyLink>
        </SubTitle>
        <Period>{info.period}</Period>
        <Description>
          {info.description.map((item, index) => (
            <DescriptionItem key={index}>{item}</DescriptionItem>
          ))}
        </Description>
      </DetailContainer>
    </ExperienceContainer>
  )
}

export default ExperiencesGroup
