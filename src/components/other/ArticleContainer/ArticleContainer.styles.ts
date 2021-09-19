import styled from "styled-components";

interface Props {
  borderColor: string;
}

export const StyledArticleContainer = styled.article<Props>`
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

    li {
      font-size: 1rem;

      width: max-content;
      padding: 0.5rem;
      margin: 0.5rem;
      position: relative;

      &::before {
        content: "";
        display: block;
        position: absolute;

        transform: skew(20deg);
        border: 3px solid ${({ borderColor }) => borderColor};
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
      }
    }
  }

  @media only screen and (min-width: ${({ theme }) =>
      theme.articleWidthBreakPoint}) {
  }
`;

export const BoldText = styled.span`
  font-weight: bold;
  word-wrap: break-word;
`;
