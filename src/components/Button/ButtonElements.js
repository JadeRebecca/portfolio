import styled from 'styled-components'
import { Link as LinkR } from 'react-router-dom'

export const BtnLink = styled(LinkR)`
  background: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.main};
  border: 1.4px solid ${({ theme }) => theme.main};
  border-radius: 10px;
  white-space: nowrap;
  padding: 10px 22px;
  font-size: 16px;
  outline: none;
  text-decoration: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: ${({ theme }) => theme.main};
    color: ${({ theme }) => theme.text};
  }
`
