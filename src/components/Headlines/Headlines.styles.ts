import styled from "styled-components";

interface h2Props {
  bgColor: string;
}

export const SectionHeadline = styled.h2`
  display: flex;
  justify-content: center;
  font-size: 2rem;
  font-weight: 700;
  width: 100%;
  margin: 1rem;
  max-width: 1280px;
`;

export const ArticleHeadline = styled.h2<h2Props>`
  display: block;
  padding: 0 0.5rem;
  background-color: ${({ bgColor }) => bgColor};
  position: absolute;
  top: 0;
  transform: translate(-0.5rem, -50%);
  font-size: 1.5rem;
  font-weight: 700;
`;
