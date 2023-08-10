import styled from "styled-components";

export const HomeContainer = styled.main`
 
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
  height: 26.25rem;
  width:29rem;
  flex-direction: column;

  h1{
    color: ${(props) => props.theme['black']};
    font-family: Nunito;
    font-size: 3rem;
    font-style: normal;
    font-weight: 700;
  }

  p{
    margin-top:3rem;
    color: ${(props) => props.theme['gray']};
    font-family: Nunito;
    font-size: 1.5rem;
    font-style: normal;
    font-weight: 400;
  }

  @media (max-width: 542px) {
    height:auto;
    width:22rem;
    margin-bottom:2rem;
    h1 {
      font-size:2rem;
    }
    p{
      font-size: 1rem;
    }
  }

  @media (max-width: 432px) {
    height:auto;
    width:18rem;
    margin-bottom:2rem;

    h1{
      font-size: 1.5rem;
    }

    p{
      font-size:0.8rem;
    }
  }
`;

export const ButtonContainer = styled.div`
  width:100%;
  display: flex;
  justify-content: space-between;
  margin-top: 4rem;

  @media (max-width: 642px) {
    flex-direction: column;
    justify-content:center;
    align-items: center;
    gap: 1rem;
    margin-top: 2rem;
  }

`;

export const GreenBtn = styled.button`
  width: 12rem;
  height: 3rem;
  border-radius: 8px;
  border: none;
  background-color: ${(props) => props.theme['green']};
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  color: #FFF;
  font-family: Nunito;
  font-size: 1.1rem;
  font-style: normal;
  font-weight: 700;
  cursor: pointer;

  &:hover {
    opacity: 0.6;
  }

  @media (max-width: 542px) {
    width: 9rem;
    height: 2rem;
    font-size: 0.8rem;
  }
`;

export const WhiteBtn = styled.button`
  width: 12rem;
  height: 3rem;
  border-radius: 8px;
  border: 2px solid #018762;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  background-color: ${(props) => props.theme['white']};

  color: ${(props) => props.theme['green']};
  font-family: Nunito;
  font-size: 1.1rem,;
  font-style: normal;
  font-weight: 700;
  cursor: pointer;

  &:hover{
    opacity: 0.6;
  }

  @media (max-width: 542px) {
    width: 9rem;
    height: 2rem;
    font-size: 0.8rem;
  }
`;

export const ImageHomeContainer = styled.div`
  width: 33rem;
  height: 25rem;
  
  img{
    width: 32rem;
    height: 24rem;
    margin-right: 1.5rem;
  }

  @media (max-width: 1224px) {
    width: 29rem;
    height: 24rem;
    img{
      width: 28rem;
      height: 22rem;
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