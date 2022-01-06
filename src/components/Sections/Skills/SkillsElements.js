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

export const SkillsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  row-gap: 20px;

  &.hidden {
    display: none;
  }

  &.goAnimation {
    > div {
      animation: ${divFadeIn} 1000ms ease forwards;
    }
  }
`

export const SkillCol = styled.div`
  //   background: red;
  padding: 15px;
  width: 24%;
  border: 1px solid ${({ theme }) => theme.main};
  border-radius: ${({ theme }) => theme.borderRadius}px;

  transform: scale(1);

  transition-duration: 0.2s;

  &:hover {
    transform: scale(1.05);
    border: 2px solid ${({ theme }) => theme.main};
  }

  @media screen and (max-width: ${({ theme }) => theme.breakpoint.l}px) {
    width: 48%;
  }
  @media screen and (max-width: ${({ theme }) => theme.breakpoint.m}px) {
    width: 100%;
  }
`

// export const CategoryTitle = styled.h3`
//   font-size: 20px;
//   text-transform: uppercase;
//   text-decoration: underline ${({ theme }) => theme.main};
//   text-decoration-thickness: 3px;
// `

export const SkillsDescription = styled.p`
  margin-top: 10px;
  font-size: 18px;
  line-height: 24px;
  color: ${({ darkText }) => (darkText ? '#010606' : 'fff')};
`
