import * as styled from './styles';

export const NewsSection = () => {
  return(
    <styled.Main>
      <styled.Title>NEWSLETTER TBB</styled.Title>
      <styled.subTitle>Cadastre-se agora para não perder nenhuma promoção</styled.subTitle>
      <styled.emailInput placeholder='Digite aqui o seu melhor email'/>
      <styled.buttonFake>CADASTRAR</styled.buttonFake>
    </styled.Main>
  )
}