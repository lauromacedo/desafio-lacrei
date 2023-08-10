import { ImageProfissionalContainer, MainContainer, TextContainer, TextProfissional, TitleProfissional } from "./style";
import ProfissionalImage from '../../assets/profissionalImage.svg';
import { useEffect } from "react";

export function Profissional() {

  useEffect(() => {
    document.title = 'Profissional | Desafio Lacrei';
  }, []);
  return (
    <MainContainer>
      <TextContainer>
        <TitleProfissional>
          Profissional
        </TitleProfissional>
        <TextProfissional>
          A Lacrei garante que pessoas LGBTQIAPN + recebam atendimento realizado por profissionais de qualidade e que atendam às suas necessidades de forma segura e acolhedora.
        </TextProfissional>
      </TextContainer>
      <ImageProfissionalContainer>
        <img src={ProfissionalImage} alt='' />
      </ImageProfissionalContainer>
    </MainContainer>
  )
}