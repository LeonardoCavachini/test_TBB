import styled, { css } from "styled-components"


export const Main = styled.div`
  background-color:  ${({ theme }) => theme.colors.primary};
  height: 8rem;
  width: 100%;
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
  @media (min-width: 1045px) {
    display: none;
  }
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
  export const StyledBurger = styled.section`
  position: absolute;
  backdrop-filter: blur(2px);
  top:0;
  left:0;
  right:0;
  bottom:0;
  width: 30rem;
  height: auto;
  z-index:1;
  display:flex;
  align-items: center;
  justify-content: center;
  background: rgb(2,0,36);
  background: linear-gradient(90deg, #F1F1F1 0%, #F7B094 35%, #F5717F 100%);
  opacity: 0;
  pointer-events: none;
  transition: .5s;
  transform: translateX(50px);
  div {
    position:absolute;
    top: 1rem;
    right: 1rem;
    transform: rotate(45deg);
    transition: 1.5s;
  }
  ${({props}:any) => props && css`
    opacity: 1;
    pointer-events: auto;
    transform: translateX(0px);
    div {
     transform: rotate(0deg) ;
    }
  `}
`;
export const IconClose = styled.div`
  background-image: url(/src/assets/menuClose.svg);
  background-repeat: no-repeat;
  background-size: 100% 100%;
  position: absolute;
  top: 2%;
  right: 5%;
  height: 4.5rem;
  width: 4rem;
`;