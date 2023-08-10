import styled from "styled-components";


export const FooterContainer = styled.footer`
  
  width: calc(100vw - 8rem);
  margin-left: 4rem;
  border-top: 1px solid ${(props) => props.theme['light-green']};

  p{
    margin-top: 1.5rem;

    color: ${(props) => props.theme['gray']};
    font-family: Nunito;
    font-size: 0.75rem;
    font-style: normal;
    font-weight: 400;
  }

  @media (max-width: 432px) {
    margin-left: 2rem;
    width: calc(100vw - 4rem);

    p{
      font-size: 0.6rem
    }
  }

  @media (max-width: 400px) {
    margin:0;
    padding-left: 1rem;
    width: 100vw;
    height:auto;
  }
`;

export const NavContainer = styled.nav`
  margin-top:2rem;
  display:flex;
  gap: 2.5rem;
  list-style: none;

  a{
    color: ${(props) => props.theme['black']};
    text-decoration:none;
    font-size: 1rem;
    font-style: normal;
    font-weight: 400;

      &:hover{
        opacity: 0.6
      }

      &.active{
        font-weight: 700;
      }
   }

   @media (max-width: 520px) {
    flex-direction: column;
    gap:0.6rem;

    a{
      font-size:0.7rem;
    }
   }
`

export const ImageContainer = styled.div`
  
  display: flex;
  gap: 2rem;
  
  margin-top: 1.5rem;

  cursor: pointer;

  img{
    width:2rem;
    height:2rem;
    &:hover{
      opacity: 0.6;
    }
  }
`