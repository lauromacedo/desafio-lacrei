import styled from "styled-components";

export const MainContainer = styled.main`
  width: 100vw;
  height: 31.25rem;

  display: flex;
  justify-content: space-between;
 
  padding: 4rem 4rem 1rem 4rem;
  
  @media (max-width: 998px) {
    flex-direction:column;
    justify-content: center;
    align-items: center;
    height: auto;
  }
`;

export const TextContainer = styled.div`
  width: 35.5rem;
  height: 14.3rem;

  display: flex;
  flex-direction:column;

  @media (max-width: 624px) {
    height:auto;
    width:22rem;
    margin-bottom:2rem;
   
    }

  @media (max-width: 432px) {
    height:auto;
    width:18rem;
    margin-bottom:2rem;
    
    }
`;

export const TitleProfissional = styled.h1`
  color: ${(props) => props.theme['black']};
  font-family: Nunito;
  font-size: 3rem;
  font-style: normal;
  font-weight: 700;

  @media (max-width: 624px) {
    font-size:2rem;
  }

  @media (max-width: 432px) {
    font-size: 1.5rem;
  }
`;

export const TextProfissional = styled.p`
  margin-top: 2rem;
  padding-left: 1.5rem;

  color: ${(props) => props.theme['gray']};
  font-family: Nunito;
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;

  border-left: 5px solid ${(props) => props.theme['green']};

  @media (max-width: 624px) {
    font-size: 1rem;
  }

  @media (max-width: 432px) {
    font-size:0.8rem;
  }
`;

export const ImageProfissionalContainer = styled.div`
  width: 34.68rem;
  height: 26.31rem;

  @media (max-width: 1224px) {
    width: 33rem;
    height: 25rem;
    img{
      width: 32rem;
      height: 24rem;
    }
  }

    @media (max-width: 1124px) {
      width: 25rem;
      height: 19rem;
      margin-top:2rem;
      img{
      width: 24rem;
      height: 18rem;
      }
    }

  
  @media (max-width: 542px) {
    width:21rem;
    height:16rem;
    img{
      width: 20rem;
      height: 15rem;
    }
  }
`;