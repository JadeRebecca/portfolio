import React from 'react'
import ButtonLink from '../Button'
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarMenu,
  SidebarLink,
  SidebarWrapper,
  SideBtnWrap,
} from './SidebarElements'
// import { }
const Sidebar = ({ toggle, isOpen }) => {
  return (
    <SidebarContainer isOpen={isOpen}>
      <Icon>
        <CloseIcon onClick={toggle} />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink to="about" onClick={toggle}>
            A propos
          </SidebarLink>
          <SidebarLink to="experiences" onClick={toggle}>
            Experiences
          </SidebarLink>
          <SidebarLink to="work" onClick={toggle}>
            Réalisations
          </SidebarLink>
          <SidebarLink to="skills" onClick={toggle}>
            Compétences
          </SidebarLink>
          <SidebarLink to="contact" onClick={toggle}>
            Contact
          </SidebarLink>
        </SidebarMenu>
        <SideBtnWrap>
          <ButtonLink text="Resume" />
        </SideBtnWrap>
      </SidebarWrapper>
    </SidebarContainer>
  )
}

export default Sidebar
