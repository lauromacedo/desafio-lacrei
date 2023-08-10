import { ImagePessoaContainer, MainContainer, TextContainer, TextPessoa, TitlePessoa } from "./style";
import PessoaImage from '../../assets/pessoaImage.svg';
import { useEffect } from "react";

export function PessoaUsuaria() {
  useEffect(() => {
    document.title = 'Pessoa Usuária | Desafio Lacrei';
  }, []);

  return (
    <MainContainer>
      <TextContainer>
        <TitlePessoa>Pessoa Usuária</TitlePessoa>
        <TextPessoa>A Lacrei garante que pessoas LGBTQIAPN + recebam atendimento realizado por profissionais de qualidade e que atendam às suas necessidades de forma segura e acolhedora.</TextPessoa>
      </TextContainer>
      <ImagePessoaContainer>
        <img src={PessoaImage} alt='' />
      </ImagePessoaContainer>
    </MainContainer>
  )
}