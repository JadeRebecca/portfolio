import { Link as LinkS } from 'react-scroll'
import styled from 'styled-components'

export const Nav = styled.nav`
  background: ${({ theme }) => theme.mainBackground};
  height: 80px;
  //   margin-top: -80px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  position: sticky;
  top: 0;
  z-index: 10;
  box-shadow: 0 10px 30px -10px ${({ theme }) => theme.shadow};
}

  @media screen and (max-width: 960px) {
    transition: all 0.8s ease-in-out;
  }
`

export const NavbarContainer = styled.div`
  background: ${({ theme }) => theme.mainBackground};
  display: flex;
  justify-content: space-between;
  height: 80px;
  z-index: 1;
  width: 100%;
  padding: 0 24px;
  max-width: 1100px;
`

export const NavLogoLink = styled(LinkS)`
  color: ${({ theme }) => theme.main};
  justify-self: flex-start;
  cursor: pointer;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  margin-left: 24px;
  font-weight: bold;
  text-decoration: none;
`
export const NavLogo = styled.img`
  height: 80%;
`
export const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: ${({ theme }) => theme.breakpoint.m}px) {
    color: ${({ theme }) => theme.main};
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`

export const NavMenu = styled.ul`
  display: flex;
  align-item: center;
  list-style: none;
  text-align: center;
  margin-right: -22px;

  @media screen and (max-width: ${({ theme }) => theme.breakpoint.m}px) {
    display: none;
  }
`
export const NavItem = styled.li`
  height: 80px;
`
export const NavLink = styled(LinkS)`
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  padding-bottom: 4px;
  font-weight: 500;

  &.active {
    padding-bottom: 0px;
    border-bottom: 4px solid ${({ theme }) => theme.main};
    transition: 0.3s ease-in-out;
  }

  &:hover {
    color: ${({ theme }) => theme.main};
    transition: 0.2s ease-in-out;
  }
`
export const NavBtn = styled.nav`
  display: flex;
  align-items: center;

  @media screen and (max-width: ${({ theme }) => theme.breakpoint.m}px) {
    display: none;
  }
`
