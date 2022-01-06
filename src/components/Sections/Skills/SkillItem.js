import React from 'react'
import { SubTitle } from '../SectionElements'
import { SkillCol, SkillsDescription, Skill } from './SkillsElements'

const SkillItem = ({ item }) => {
  return (
    <SkillCol>
      <SubTitle className="underline">{item.category}</SubTitle>
      <SkillsDescription>
        {item.skills.map((skill) => (
          <Skill>{skill}</Skill>
        ))}
      </SkillsDescription>
    </SkillCol>
  )
}

export default SkillItem
