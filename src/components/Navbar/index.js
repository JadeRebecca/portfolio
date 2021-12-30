import React from 'react'
import { animateScroll as scroll } from 'react-scroll'
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
import ButtonLink from '../Button'

const Navbar = ({ toggle, themeToggler }) => {
  const toggleHome = () => {
    scroll.scrollToTop()
  }
  return (
    <>
      <Nav>
        <NavbarContainer>
          <NavLogo
            to="/"
            onClick={toggleHome}
            // spy={true}
            // smooth={true}
            // offset={-80}
            // duration={500}
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
                offset={-80}
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
                offset={-80}
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
                offset={-80}
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
                offset={-80}
                duration={500}
              >
                Contact
              </NavLink>
            </NavItem>
          </NavMenu>
          <NavBtn>
            <ButtonLink text="Resume" />
          </NavBtn>
          <button onClick={themeToggler}>Switch Theme</button>
        </NavbarContainer>
      </Nav>
    </>
  )
}

export default Navbar
