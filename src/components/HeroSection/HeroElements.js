import styled from 'styled-components'

export const HeroContainer = styled.div`
  background: #0a192f;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 30px;
  height: 800px;
  position: relative;
  z-index: 1;
`

// export const HeroBg = styled.div`
//   background: red;
//   color: white;
//   position: absolute;
//   top: 0;
//   right: 0;
//   bottom: 0;
//   left: 0;
//   width: 100%;
//   height: 100%;
//   overflow: hidden;
// `

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
  color: green;
  font-size: 20px;
  text-align: left;
  max-width: 600px;

  @media screen and (max-width: 768px) {
    font-size: 14px;
  }

  @media screen and (max-width: 480px) {
    font-size: 12px;
  }
`

export const HeroH1 = styled.h1`
  color: #fff;
  font-size: 48px;
  text-align: left;

  @media screen and (max-width: 768px) {
    font-size: 40px;
  }

  @media screen and (max-width: 480px) {
    font-size: 32px;
  }
`
export const HeroP2 = styled.p`
  margin-top: 24px;
  color: #fff;
  font-size: 24px;
  text-align: left;
  max-width: 600px;

  @media screen and (max-width: 768px) {
    font-size: 24px;
  }

  @media screen and (max-width: 480px) {
    font-size: 18px;
  }
`
