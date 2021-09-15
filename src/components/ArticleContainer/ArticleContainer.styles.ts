import styled from "styled-components";

interface Props {
  borderColor: string;
}

export const StyledArticleContainer = styled.article<Props>`
  padding: 2rem;
  border: 3px solid ${({ borderColor }) => borderColor};
  width: 100%;
  max-width: 500px;
  position: relative;
  border-radius: 0.25rem;
  font-size: 1.2rem;
  box-shadow: ${({ borderColor }) => borderColor}88 0px 3px 8px;

  @media only screen and (min-width: ${({ theme }) =>
      theme.articleWidthBreakPoint}) {
  }
`;
