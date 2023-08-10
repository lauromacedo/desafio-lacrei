import { FooterContainer, ImageContainer, NavContainer } from "./style";
import { NavLink } from "react-router-dom";
import FacebookImage from '../../assets/FacebookLogo.svg';
import InstagramImage from '../../assets/InstagramLogo.svg';
import LinkedinImage from '../../assets/LinkedinLogo.svg';

export function Footer() {

  return (

    <FooterContainer>
      <NavContainer>
        <NavLink to='/home'>Home</NavLink>
        <NavLink to='/pessoa-usuaria'>Pessoa Usuária</NavLink>
        <NavLink to='/profissional'>Profissional</NavLink>
      </NavContainer>
      <ImageContainer>
        <a
          href='https://www.facebook.com/lacrei.saude'
          target="_blank" rel="noopener noreferrer"
        >
          <img src={FacebookImage} />
        </a>
        <a
          href="https://www.instagram.com/lacrei.saude/"
          target="_blank" rel="noopener noreferrer"
        >
          <img src={InstagramImage} />
        </a>
        <a
          href='https://www.linkedin.com/company/lacrei'
          target="_blank" rel="noopener noreferrer"
        >
          <img src={LinkedinImage} />
        </a>
      </ImageContainer>

      <p>Desafio Front-end Lacrei</p>
    </FooterContainer>

  )
}