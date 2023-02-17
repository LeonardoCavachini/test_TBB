import styled from "styled-components";

export const Main = styled.div`
  width: 100%;
  height: 31.4rem;
  background-color: ${({ theme }) => theme.colors.tertiary};
  padding-top: 2.7rem;
`;
export const Title = styled.h2`
  font-weight: 700;
  font-size: ${({ theme }) => theme.sizes.large};
  color: ${({ theme }) => theme.colors.Title};
  text-align: center;
`;
export const TitleBox = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  width: 90%;
  font-weight: 400;
  font-size: ${({ theme }) => theme.sizes.medium};
  color: ${({ theme }) => theme.colors.Title};
  line-height: 1.6rem;
  margin: 5.3rem auto;
  @media screen and (min-width: 1024px){
    font-size: ${({ theme }) => theme.sizes.large};
  }
`;
export const SocialBox = styled.div`
  background-image: url(/src/assets/social.svg);
  background-repeat: no-repeat;
  background-size: 100% 100%;
  width: 20rem;
  height: 6rem;
  margin-left: 10rem;
  @media screen and (min-width: 1024px){
    margin-left: 42.5%;
  }
  @media screen and (min-width: 1920px){
    margin-left: 44.7%;
  }
`;
export const PaymentBox = styled.div`
  background-image: url(/src/assets/cartoes.svg);
  background-repeat: no-repeat;
  background-size: 100% 100%;
  width: 20rem;
  height: 5rem;
  margin-left: 10rem;
  @media screen and (min-width: 1024px){
    margin-left: 42.5%;
  }
  @media screen and (min-width: 1920px){
    margin-left: 44.7%;
  }
`;
