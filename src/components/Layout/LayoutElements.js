import styled from 'styled-components'

export const Container = styled.div`
  width: 75%;
  margin: auto;

  @media screen and (max-width: ${({ theme }) => theme.breakpoint.m}px) {
    width: 80%;
  }
  @media screen and (max-width: ${({ theme }) => theme.breakpoint.s}px) {
    width: 92%;
  }
`
