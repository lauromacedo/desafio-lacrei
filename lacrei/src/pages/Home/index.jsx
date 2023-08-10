import { ButtonContainer, GreenBtn, HomeContainer, ImageHomeContainer, TextContainer, WhiteBtn } from "./style";
import ImageHome from '../../assets/imageHome.svg';
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

export function Home() {
  const navigate = useNavigate();

  useEffect(() => {
    document.title = 'Home | Desafio Lacrei';
  }, []);
  return (

    <HomeContainer>
      <TextContainer>
        <h1>Boas vindas a Lacrei
          Saúde</h1>
        <p>Uma plataforma segura e acolhedora para comunidade LGBTQIAPN+</p>
        <ButtonContainer>
          <GreenBtn onClick={() => navigate('/pessoa-usuaria')}>Pessoa Usuária</GreenBtn>
          <WhiteBtn onClick={() => navigate('/profissional')}>Profissional</WhiteBtn>
        </ButtonContainer>
      </TextContainer>
      <ImageHomeContainer>
        <img src={ImageHome} alt="" />
      </ImageHomeContainer>
    </HomeContainer>

  )
}