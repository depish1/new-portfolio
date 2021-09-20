import styled from "styled-components";

export const StyledFooter = styled.footer`
  background-color: ${({ theme }) => theme.colors.yellow};
  color: ${({ theme }) => theme.colors.black};
  padding: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
`;
