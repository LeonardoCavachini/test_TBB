import styled from "styled-components";

export const CheckboxContainer = styled.div`
  display: flex;
  width: 60%;
  height: 80%;
  flex-direction: column;
  margin-top: 8rem;
  margin-right: 5rem;
  align-items: center;
  justify-content: space-around;

`;
export const CheckboxDiv = styled.div`
display: flex;
flex-direction: row;
align-items: center;
border: 1px solid blue;
justify-content: center;
align-items: center;


`;
export const Checkbox = styled.input.attrs({type: 'checkbox'})`
  width: 2.5rem;
  height: 6rem;
  margin-bottom: -3rem;

`;
export const Title = styled.label`
   color: ${({ theme }) => theme.colors.Title};
   font-size: ${({ theme }) => theme.sizes.medium};
   margin-bottom: 2rem;
`;
export const Button = styled.button`
  height: 5rem;
  width: 12rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.Title};
  font-size: ${({ theme }) => theme.sizes.medium};
`;