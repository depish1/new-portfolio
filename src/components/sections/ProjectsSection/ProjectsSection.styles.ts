import { FunctionComponent } from "react";
import styled from "styled-components";

export const ProjectsWrapper: FunctionComponent = styled.div`
  display: grid;
  grid-template-columns: 100%;
  grid-gap: 1rem;
  grid-row-gap: 2rem;
  margin-bottom: 1rem;

  @media only screen and (min-width: ${({ theme }) => theme.menuBreakPoint}) {
    grid-template-columns: 50% 50%;
    grid-gap: 2rem;
  }
`;

export const ProjectDescription = styled.p`
  margin: 1rem 0;
  line-height: 1;
  height: 5rem;
`;
