import styled from "styled-components";

export const Main = styled.div`
  width: 100%;
  height: 18.7rem;
  background-color: ${({ theme }) => theme.colors.secondary};
  padding: 1rem;
`;
export const Title = styled.h1`
  font-weight: 700;
  font-size: ${({ theme }) => theme.sizes.xlarge};
  text-align: center;
  margin-top: 3rem;
`;
export const subTitle = styled.h2`
  font-weight: 400;
  font-size: ${({ theme }) => theme.sizes.medium};
  text-align: center;
`;
export const emailInput = styled.input`
  width: 95%;
  height: 5.2rem;
  border-radius: .3rem;
  color: ${({ theme }) => theme.colors.placeholder};
  margin-top: 2rem;
  margin-left: 1rem;
  padding-left: 1rem;
  @media screen and (min-width: 1024px){
    font-size: ${({ theme }) => theme.sizes.medium};
  }
`;
export const buttonFake = styled.div`
  font-weight: 700;
  font-size: ${({ theme }) => theme.sizes.medium};
  color: ${({ theme }) => theme.colors.Title};
  background-color: #e2e2e2;
  width: 10.8rem;
  height: 4.8rem;
  position: relative;
  left: 69.5%;
  top: -30%;
  padding: 1.5rem;
  padding-left: 1rem;
  @media screen and (min-width: 1024px){
    left: 87%;
  }
  @media screen and (min-width: 1920px){
    left: 89.7%;
  }
`;