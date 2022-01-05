import styled from 'styled-components'

export const HeroContainer = styled.div`
  background: ${({ theme }) => theme.background};
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 30px;
  height: 800px;
  position: relative;
  z-index: 1;
  transition: all 0.8s ease-in-out;
`

export const HeroContent = styled.div`
  z-index: 3;
  max-width: 1200px;
  position: absolute;
  padding: 8px 24px;
  display: flex;
  flex-direction: column;
  align-items: left;
`
export const HeroP1 = styled.p`
  margin-top: 24px;
  color: ${({ theme }) => theme.main};
  font-size: 20px;
  text-align: left;
  max-width: 600px;

  @media screen and (max-width: ${({ theme }) => theme.breakpoint.m}px) {
    font-size: 14px;
  }

  @media screen and (max-width: ${({ theme }) => theme.breakpoint.s}px) {
    font-size: 12px;
  }
`

export const HeroH1 = styled.h1`
  color: ${({ theme }) => theme.text};
  font-size: 48px;
  text-align: left;

  @media screen and (max-width: ${({ theme }) => theme.breakpoint.m}px) {
    font-size: 40px;
  }

  @media screen and (max-width: ${({ theme }) => theme.breakpoint.s}px) {
    font-size: 32px;
  }
`
export const HeroP2 = styled.p`
  color: ${({ theme }) => theme.text};
  margin-top: 24px;
  font-size: 24px;
  text-align: left;
  max-width: 600px;

  @media screen and (max-width: ${({ theme }) => theme.breakpoint.m}px) {
    font-size: 24px;
  }

  @media screen and (max-width: ${({ theme }) => theme.breakpoint.s}px) {
    font-size: 18px;
  }
`
