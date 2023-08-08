import styled from "styled-components";

export const HomeContainer = styled.div`
  width: calc(100vw - 8rem);
  height: 31.25rem;

  display: flex;
  justify-content: space-between;
  margin-top: 4rem;
  margin-left:4rem;

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
`;

export const ButtonContainer = styled.div`
  width:100%;
  display: flex;
  justify-content: space-between;
  margin-top: 4rem;
`;

export const GreenBtn = styled.button`
  width: 192px;
  height: 48px;
  border-radius: 8px;
  border: none;
  background-color: ${(props) => props.theme['green']};
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  color: #FFF;
  font-family: Nunito;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  cursor: pointer;

  &:hover {
    opacity: 0.6;
  }
`;

export const WhiteBtn = styled.button`
  width: 192px;
  height: 48px;
  border-radius: 8px;
  border: 2px solid #018762;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  background-color: ${(props) => props.theme['white']};

  color: ${(props) => props.theme['green']};
  font-family: Nunito;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  cursor: pointer;

  &:hover{
    opacity: 0.6;
  }
`;

export const ImageHomeContainer = styled.div`
  width: 34.68rem;
  height: 26.31rem;
`;