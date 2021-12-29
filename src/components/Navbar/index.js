import React from 'react'
import { FaBars } from 'react-icons/fa'
import {
  Nav,
  NavLogo,
  NavbarContainer,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLink,
  NavBtn,
  NavBtnLink,
} from './NavbarElement'

const Navbar = ({ toggle }) => {
  return (
    <>
      <Nav>
        <NavbarContainer>
          <NavLogo
            to="hero"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            JD
          </NavLogo>
          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLink
                to="about"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                About
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                to="experiences"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                Experience
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                to="work"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                Work
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                to="contact"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                Contact
              </NavLink>
            </NavItem>
          </NavMenu>
          <NavBtn>
            <NavBtnLink to="resume">Resume</NavBtnLink>
          </NavBtn>
        </NavbarContainer>
      </Nav>
    </>
  )
}

export default Navbar
