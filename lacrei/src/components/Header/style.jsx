import styled from "styled-components";

export const HeaderContainer = styled.header`
display: flex;
align-items: center;
justify-content:space-between;

width: 100vw;

padding: 0.5rem 4rem;

background-color: ${(props) => props.theme['ligth-gray']};

h1{
  color: ${(props) => props.theme['green']};
  font-family: Nunito;
  font-size: 2rem;
  font-style: normal;
  font-weight: 700;
  cursor: pointer;

  &:hover{
    opacity: 0.6;
  }  
}

nav{
  display:flex;
  gap: 2.5rem;
  list-style: none;
}

a {
  color: ${(props) => props.theme['black']};
  text-decoration:none;
  font-family: Nunito;
  font-size: 1rem;
  font-style: normal;
  font-weight: 700;
  cursor: pointer;

  &:hover{
    opacity: 0.6;
  }

  &.active{
    color:${(props) => props.theme['green']};
  }
}

@media (max-width: 558px) {
  width:100%;
  height: auto;
  flex-direction: column;
  justify-content: center;
  align-items:center;
  padding: 0 0;
  margin: 0;
  
  
  h1 {
    font-size: 1.5rem;
  }

  nav {
    gap: 2rem;
  }

  a {
    font-size: 0.9rem;
  }
}

@media (max-width: 426px) {
  h1 {
    font-size: 1.1rem;
  }

  nav {
    gap: 0.7rem;
  }

  a {
    font-size: 0.5rem;
  }
}

`