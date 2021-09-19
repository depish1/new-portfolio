import styled from "styled-components";

interface IArticleContainerProps {
  borderColor: string;
}

interface ITechnologyProps {
  borderColor: string;
  textColor: string;
  isMain?: boolean;
}

export const StyledArticleContainer = styled.article<IArticleContainerProps>`
  padding: 2rem;
  border: 3px solid ${({ borderColor }) => borderColor};
  width: 100%;
  max-width: 550px;
  position: relative;
  border-radius: 0.25rem;
  font-size: 1.2rem;
  box-shadow: ${({ borderColor }) => borderColor}88 0px 3px 8px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  ul {
    margin: 0.5rem 0;
    list-style-type: none;
    display: flex;
    flex-wrap: wrap;
  }

  @media only screen and (min-width: ${({ theme }) =>
      theme.articleWidthBreakPoint}) {
  }
`;

export const BoldText = styled.span`
  font-weight: bold;
  word-wrap: break-word;
`;

export const Technology = styled.div<ITechnologyProps>`
  font-size: 1rem;
  width: max-content;
  margin: 0.8rem;
  position: relative;
  height: min-content;
  z-index: 10;
  ${({ isMain, borderColor, textColor }) => {
    if (isMain) {
      return `background-color: ${borderColor};
        color: ${textColor};`;
    }
  }}

  &::before {
    content: "";
    display: block;
    position: absolute;
    transform: skew(20deg);
    border: 3px solid ${({ borderColor }) => borderColor};
    top: -0.5rem;
    bottom: -0.5rem;
    left: -0.5rem;
    right: -0.5rem;
    z-index: -1;
    ${({ isMain, borderColor }) => {
      if (isMain) {
        return `background-color: ${borderColor};`;
      }
    }}
  }
`;
