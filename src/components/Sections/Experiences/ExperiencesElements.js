import styled, { keyframes } from 'styled-components'

const divFadeIn = keyframes`
  0% {
    transform: translateY(100%);
  }
100%
   {
    transform: translateY(0%);
  }
`

export const ExperienceContainer = styled.div`
  display: flex;
  justify-content: space-between;

  &.hidden {
    display: none;
  }
  &.goAnimation {
    > div {
      animation: ${divFadeIn} 1000ms ease forwards;
    }
  }

  @media screen and (max-width: ${({ theme }) => theme.breakpoint.m}px) {
    flex-direction: column;
  }
`
export const CompanyContainer = styled.div`
  width: 38%;

  @media screen and (max-width: ${({ theme }) => theme.breakpoint.m}px) {
    width: 100%;
  }
`

export const DetailContainer = styled.div`
  width: 58%;

  @media screen and (max-width: ${({ theme }) => theme.breakpoint.m}px) {
    width: 100%;
  }
`

export const TypeWrapper = styled.div`
  margin-bottom: 24px;
  display: flex;
  gap: 12px;
`

export const Type = styled.span`
  font-size: 28px;
  line-height: 1.1;
  font-weight: 600;
  color: ${({ theme }) => theme.text};

  @media screen and (max-width: ${({ theme }) => theme.breakpoint.s}px) {
    font-size: 20px;
  }
`

export const CompanyList = styled.ul`
  list-style: none;
`
export const CompanyItem = styled.li`
  display: flex;
  flex-direction: row;
  align-items: center;
  min-height: 30px;
  cursor: pointer;
  border-left: 4px solid ${({ theme }) => theme.secondary};
  padding-left: 10px;

  &.active {
    border-left: 4px solid ${({ theme }) => theme.primary};
    transition: 0.3s ease-in-out;
    background: ${({ theme }) => theme.secondary};
    color: ${({ theme }) => theme.background};
  }
`

export const CompanyLink = styled.a`
  text-decoration: none;
  color: ${({ theme }) => theme.main};
  white-space: nowrap;

  &:hover {
    color: pink;
    border-bottom: 1px solid pink;
    transition: 3s ease-in-out;
  }
`

export const Period = styled.p`
  padding-top: 5px;
  padding-bottom: 10px;
`

export const Description = styled.ul`
  list-style: none;
  text-align: justify;
`

export const DescriptionItem = styled.li`
  line-height: 24px;
  &:before {
    content: '► ';
    color: ${({ theme }) => theme.main};
  }
`

export const BtnContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 40px;
`
