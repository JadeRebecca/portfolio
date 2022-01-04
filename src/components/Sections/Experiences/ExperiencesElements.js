import styled from 'styled-components'

export const ExperienceContainer = styled.div`
  display: flex;
  gap: 30px;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`
export const CompanyContainer = styled.div``
export const DetailContainer = styled.div`
  text-align: justify;
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
  color: ${({ lightText }) => (lightText ? '#f7f8fa' : '#010606')};

  @media screen and (max-width: 480px) {
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
