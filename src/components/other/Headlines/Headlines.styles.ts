import styled from "styled-components";

export const SectionHeadline = styled.h2`
  display: flex;
  justify-content: center;
  font-size: 2.5rem;
  font-weight: 800;
  width: 100%;
  margin: 0 1rem;
  margin-bottom: 3rem;
  max-width: 1280px;
`;

export const ArticleHeadline = styled.h2`
  display: block;
  padding: 0 0.5rem;
  background-color: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.primary};
  position: absolute;
  top: 0;
  transform: translate(-0.5rem, -50%);
  font-size: 1.5rem;
  font-weight: 700;
`;
