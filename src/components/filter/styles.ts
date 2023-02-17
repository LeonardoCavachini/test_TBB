import styled from "styled-components";

export const CheckboxContainer = styled.div`
  display: flex;
  width: 10%;
  height: 80%;
  flex-direction: column;
  margin-top: 8rem;
  margin-right: 12rem;
  align-items: center;
  justify-content: space-around;
  @media screen and (min-width: 1024px){
    flex-direction: row;
    width: 100%;
    margin-top: 0;
    background-color: ${({ theme }) => theme.colors.primary};
  }
`;
export const Checkbox = styled.input.attrs({type: 'checkbox'})`
  width: 2.5rem;
  height: 6rem;
  margin-bottom: -2rem;
  @media screen and (min-width: 1024px){
    margin-bottom:0;
  }
`;
export const Title = styled.label`
   color: ${({ theme }) => theme.colors.Title};
   font-size: ${({ theme }) => theme.sizes.medium};
   margin-bottom: 2rem;
   @media screen and (min-width: 1024px){
    margin-bottom: 0;
   }
`;
export const Button = styled.button`
  height: 5rem;
  width: 12rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.Title};
  font-size: ${({ theme }) => theme.sizes.medium};
`;