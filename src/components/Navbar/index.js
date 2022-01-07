import React from 'react'
import { animateScroll as scroll } from 'react-scroll'
import { FaBars } from 'react-icons/fa'
import ThemeToggler from '../ThemeToggler'
import {
  Nav,
  NavLogoLink,
  NavLogo,
  NavbarContainer,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLink,
  NavBtn,
} from './NavbarElement'
import Btn from '../Button'
import Pdf from '../../docs/resume.pdf'
import logo from '../../images/logo/logo-blanc.png'

const Navbar = ({ toggle, theme, themeToggler }) => {
  const toggleHome = () => {
    scroll.scrollToTop()
  }
  return (
    <>
      <Nav>
        <NavbarContainer>
          <NavLogoLink to="/" onClick={toggleHome}>
            <NavLogo src={logo} alt="JD logo" />
          </NavLogoLink>
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
                A propos
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
                Experiences
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
                Réalisations
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                to="skills"
                spy={true}
                smooth={true}
                offset={-80}
                duration={500}
              >
                Compétences
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
            <Btn href={Pdf} target="_blank" text="CV" />
          </NavBtn>
          <NavBtn>
            <ThemeToggler theme={theme} toggleTheme={themeToggler} />
          </NavBtn>
        </NavbarContainer>
      </Nav>
    </>
  )
}

export default Navbar
