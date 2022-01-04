import React from 'react'
import { works } from './Data'

import {
  InfoContainer,
  InfoWrapper,
  InfoRow,
  Column1,
  TextWrapper,
  Title,
  Column2,
} from '../SectionElements'

import WorkItem from './WorkItem'
import { WorksWrapper } from './WorkElements'

const Work = () => {
  return (
    <InfoContainer id="work">
      <InfoWrapper>
        <Title>02. Mes réalisations</Title>
        <InfoRow>
          <Column2>
            <TextWrapper>
              {/* <Heading>Heading</Heading> */}
              {/* <Subtitle></Subtitle> */}
            </TextWrapper>
          </Column2>
          <Column1>
            {/* <ImgWrap>
              <Img src={img} alt="digital work" />
            </ImgWrap> */}
          </Column1>
        </InfoRow>
        <WorksWrapper>
          {works.map((item, index) => (
            <WorkItem
              order={index % 2 === 0 ? 1 : 2}
              key={`work-${item.id}`}
              id={item.id}
              title={item.title}
              category={item.category}
              description={item.description}
              images={item.images}
              technos={item.technos}
            />
          ))}
        </WorksWrapper>
      </InfoWrapper>
    </InfoContainer>
  )
}

export default Work
