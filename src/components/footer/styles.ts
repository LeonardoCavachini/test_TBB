import styled from "styled-components";

export const Main = styled.div`
  width: 100%;
  height: 17.5rem;
  background-color: #FFFFFF;
`;
export const Title = styled.h5`
  font-weight: 400;
  color: ${({ theme }) => theme.colors.placeholder};
  font-size: ${({ theme }) => theme.sizes.small};
  text-align: center;
  margin-top: .5rem;
`;
export const Text = styled.p`
  margin-top: 1.5rem;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.placeholder};
  font-size: ${({ theme }) => theme.sizes.small};
  text-align: center;
`;
