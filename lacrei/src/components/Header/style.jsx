import styled from "styled-components";

export const HeaderContainer = styled.header`
display: flex;
align-items: center;
justify-content:space-between;

height: 4rem;
width: 100vw;

padding: 0 4rem;

background-color: ${(props) => props.theme['ligth-gray']};

h1{
  color: ${(props) => props.theme['green']};
  font-family: Nunito;
  font-size: 2rem;
  font-style: normal;
  font-weight: 700;
  cursor: pointer;

  &:hover{
    opacity: 0.6
  }  
}

nav{
  display:flex;
  gap: 2.5rem;
  list-style: none
}

a {
  color: ${(props) => props.theme['black']};
  text-decoration:none;
  font-family: Nunito;
  font-size: 1.1rem;
  font-style: normal;
  font-weight: 700;
  cursor: pointer;

  &:hover{
    opacity: 0.6
  }

  &.active{
    color:${(props) => props.theme['green']}
  }
}
`