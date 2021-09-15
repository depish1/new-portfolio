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
  min-height: calc(100vh - ${({ minusHeight }) => minusHeight});
  color: ${({ textColor }) => textColor};
  background-color: ${({ bgColor }) => bgColor};
  display: flex;
  justify-content: center;
`;

export const Wrapper = styled.div<IWrapperProps>`
  width: 100%;
  max-width: 1280px;
  margin: 2rem;
  ${({ centerXY }) =>
    centerXY &&
    `display: flex;
    justify-content: center;
    align-items: center;`}
`;
