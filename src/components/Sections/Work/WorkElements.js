import styled from 'styled-components'

export const WorksWrapper = styled.div``

export const ItemWrapper = styled.div`
  display: flex;
  background: yellow;
  gap: 30px;
  margin-bottom: 30px;
  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`
export const Category = styled.p`
  color: ${({ theme }) => theme.main};
  font-size: 18px;
  line-height: 32px;
`
export const Title = styled.h3`
  color: ${({ theme }) => theme.color};
  font-size: 20px;
  line-height: 26px;
`
export const Description = styled.div`
  background-color: ${({ theme }) => theme.main};
  padding: 8px;
  color: ${({ theme }) => theme.color};
  font-size: 16px;
  line-height: 18px;
`
export const TechnoWrapper = styled.div`
  margin-top: 5px;
  text-align: right;
`
export const Techno = styled.span`
  padding-right: 5px;
`
export const ItemInfo = styled.div`
  width: 50%;
  order: ${({ order }) => order};

  @media screen and (max-width: 768px) {
    width: 100%;
    order: 1;
  }
`

export const ItemImageWrapper = styled.div`
  width: 50%;
  background: red;
  order: ${({ order }) => order};

  @media screen and (max-width: 768px) {
    width: 100%;
    order: 2;
  }
`

export const ItemImage = styled.img`
  width: 100%;
`
