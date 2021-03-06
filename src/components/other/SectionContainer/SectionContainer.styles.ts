import styled from "styled-components";

interface IStyledSectionContainerProps {
  id: string;
}

export const StyledSectionContainer = styled.section<IStyledSectionContainerProps>`
  width: 100%;
  min-height: 100vh;
  color: ${({ theme }) => theme.colors.text};
  background-color: ${({ theme }) => theme.colors.background};
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 3rem 1rem;
  position: relative;

  @media only screen and (min-width: ${({ theme }) => theme.menuBreakPoint}) {
    padding: 2rem;
  }
`;

export const Wrapper = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
