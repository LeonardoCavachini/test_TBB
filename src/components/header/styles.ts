import styled from "styled-components"


export const Main = styled.div`
  background-color:  ${({ theme }) => theme.colors.primary};
  height: 8rem;
  display: flex;
  justify-content: space-between;
`
export const IconBox = styled.div`
  display: flex;
  justify-content: space-between;
  width:11rem;
 
  padding: 1rem;
  padding-top: 2rem;
`;
export const CartIcon = styled.div`
  height: 3.5rem;
  background-image: url(/src/assets/cart.png);
  background-repeat: no-repeat;
  background-size: 100% 100%;
  width: 4rem;
`;
export const UserIcon = styled.div`
  height: 4rem;
  background-image: url(/src/assets/user.png);
  background-repeat: no-repeat;
  background-size: 100% 100%;
  width: 4rem;
`
export const BurguerIcon = styled.div`
  height: 4rem;
  background-image: url(/src/assets/burguer.png);
  background-repeat: no-repeat;
  background-size: 100% 100%;
  width: 4rem;
  margin-top: 2rem;
  margin-left: 1rem;
`
export const InputField = styled.input`
  height: 5rem;
  font-size: ${({ theme }) => theme.sizes.medium};
  width: 100%;
  border: 2px solid #aaa;
  border-radius: .4rem;
  outline: none;
  padding: .5rem;
  box-sizing: border-box;
  transition: 0.3s;
  padding-left: 4rem;
  cursor: pointer;
`;

export const searchIcon = styled.div`
  position: absolute;
  left: .5rem;
  top: 10%;
  width: 2.5rem;
  height: 2.5rem;
  `