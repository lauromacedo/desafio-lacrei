import styled from "styled-components";

export const MainContainer = styled.div`
  width: calc(100vw - 8rem);
  height: 31.25rem;

  display: flex;
  justify-content: space-between;
  margin-top: 4rem;
  margin-left: 4rem;

`;

export const TextContainer = styled.div`
  width: 35.5rem;
  height: 14.3rem;

  display: flex;
  flex-direction:column;
`;

export const TitlePessoa = styled.h1`
  color: ${(props) => props.theme['black']};
  font-family: Nunito;
  font-size: 3rem;
  font-style: normal;
  font-weight: 700;
`;
export const TextPessoa = styled.p`
  margin-top: 2rem;
  padding-left: 1.5rem;

  color: ${(props) => props.theme['gray']};
  font-family: Nunito;
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;

  border-left: 5px solid ${(props) => props.theme['green']}
`;