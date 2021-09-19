import styled from "styled-components";

interface IStyledSectionContainerProps {
  bgColor: string;
  textColor: string;
  minusHeight: string;
}

interface IWrapperProps {
  centerXY: boolean;
}

export const StyledSectionContainer = styled.section<IStyledSectionContainerProps>`
  width: 100%;
  min-height: 100vh;
  color: ${({ textColor }) => textColor};
  background-color: ${({ bgColor }) => bgColor};
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 1rem;

  @media only screen and (min-width: ${({ theme }) => theme.menuBreakPoint}) {
    padding: 2rem;
  }
`;

export const Wrapper = styled.div<IWrapperProps>`
  height: 100%;
  width: 100%;
  display: flex;

  ${({ centerXY }) =>
    centerXY &&
    `display: flex;
    justify-content: center;
    align-items: center;`}
`;
