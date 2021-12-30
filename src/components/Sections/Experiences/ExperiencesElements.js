import styled from 'styled-components'

export const CompanyList = styled.ul`
  list-style: none;
`
export const CompanyItem = styled.li`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 30px;
  cursor: pointer;
  border-left: 4px solid ${({ theme }) => theme.secondary};
  padding-left: 10px;

  &.active {
    border-left: 4px solid ${({ theme }) => theme.main};
    transition: 0.3s ease-in-out;
    background: ${({ theme }) => theme.secondary};
    color: ${({ theme }) => theme.main};
  }
`
export const Title = styled.h3``

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
`

export const DescriptionItem = styled.li`
  line-height: 24px;
  &:before {
    content: '► ';
    color: ${({ theme }) => theme.main};
  }
`
