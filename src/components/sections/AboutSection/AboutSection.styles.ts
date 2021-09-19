import styled from "styled-components";

export const AboutMeTextSection = styled.p`
  p {
    margin: 0.5rem 0;

    &:last-child {
      margin-bottom: 2rem;
    }
  }
`;

export const SkillsList = styled.ul`
  display: flex;
  flex-direction: column;

  li {
    display: flex;
    align-items: center;
  }

  ul {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
  }
`;
