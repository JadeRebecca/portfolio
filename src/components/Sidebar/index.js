import React from 'react'
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarMenu,
  SidebarLink,
  SidebarWrapper,
  SidebarRoute,
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
            About
          </SidebarLink>
          <SidebarLink to="experiences" onClick={toggle}>
            Experience
          </SidebarLink>
          <SidebarLink to="work" onClick={toggle}>
            Work
          </SidebarLink>
          <SidebarLink to="contact" onClick={toggle}>
            Contact
          </SidebarLink>
        </SidebarMenu>
        <SideBtnWrap>
          <SidebarRoute to="/route">Resume</SidebarRoute>
        </SideBtnWrap>
      </SidebarWrapper>
    </SidebarContainer>
  )
}

export default Sidebar
