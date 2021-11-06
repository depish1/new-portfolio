import styled from "styled-components";

interface ITechnologyProps {
  isMain?: boolean;
}

export const StyledArticleContainer = styled.article`
  padding: 2rem;
  border: 3px solid ${({ theme }) => theme.colors.border};
  width: 100%;
  max-width: 550px;
  position: relative;
  border-radius: 0.25rem;
  font-size: 1.2rem;
  box-shadow: ${({ theme }) => theme.colors.text};
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  ul {
    margin: 0.5rem 0;
    list-style-type: none;
    display: flex;
    flex-wrap: wrap;
  }

  @media only screen and (min-width: ${({ theme }) => theme.menuBreakPoint}) {
    padding: 2rem 3rem;
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
  font-weight: bold;
  ${({
    isMain,
    theme: {
      colors: { primary, text },
    },
  }) => {
    if (isMain) {
      return `background-color: ${primary};
        color: ${text};`;
    }
  }}

  &::before {
    content: "";
    display: block;
    position: absolute;
    transform: skew(20deg);
    border: 3px solid
      ${({
        theme: {
          colors: { primary },
        },
      }) => primary};
    top: -0.5rem;
    bottom: -0.5rem;
    left: -0.5rem;
    right: -0.5rem;
    z-index: -1;
    ${({
      isMain,
      theme: {
        colors: { primary },
      },
    }) => {
      if (isMain) {
        return `background-color: ${primary};`;
      }
    }}
  }
`;
