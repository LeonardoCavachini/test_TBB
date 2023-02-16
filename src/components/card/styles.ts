import styled from "styled-components"

export const Main = styled.div`
  width: 44%;
  display: flex;
  flex-direction: column;
  margin: 1rem 1rem;
  border-radius: 1rem;
  border: 2px solid black;
`;
export const Pic = styled.img`
  width: 100%;
  height: 15.5rem;
  padding: 1.5rem 0;
`;
export const Title = styled.h3`
  font-weight: 700;
  font-size: ${({ theme }) => theme.sizes.medium};
  color: ${({ theme }) => theme.colors.Title};
  text-align: center;
  margin-bottom: 1.5rem;
`;