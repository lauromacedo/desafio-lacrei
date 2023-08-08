import { createGlobalStyle } from "styled-components";


export const GlobalStyle = createGlobalStyle`
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  background-color: ${props => props.theme.white};
  color: ${props => props.theme.black}
}

header, body, footer {
  font-family: 'Nunito', sans-serif;
  font-size: 1rem;
}
`