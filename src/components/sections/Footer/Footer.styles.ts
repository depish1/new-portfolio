import styled from "styled-components";

export const StyledFooter = styled.footer`
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.background};
  padding: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
`;
