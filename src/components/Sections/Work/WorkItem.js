import React from 'react'
import img from '../../../images/ipad.png'
import {
  ItemWrapper,
  ItemInfo,
  Category,
  Title,
  Description,
  TechnoWrapper,
  Techno,
  ItemImageWrapper,
  ItemImage,
} from './WorkElements'

const WorkItem = ({ order, title, category, description, images, technos }) => {
  return (
    <ItemWrapper>
      <ItemInfo order={order}>
        <Category>{category}</Category>
        <Title>{title}</Title>
        <Description>{description}</Description>
        <TechnoWrapper>
          {technos.map((item, index) => (
            <Techno key={`${item}-${index}`}>{item}</Techno>
          ))}
        </TechnoWrapper>
      </ItemInfo>
      <ItemImageWrapper order={order === 1 ? 2 : 1}>
        <ItemImage src={img} alt="webapp screenshot" />
      </ItemImageWrapper>
    </ItemWrapper>
  )
}

export default WorkItem
