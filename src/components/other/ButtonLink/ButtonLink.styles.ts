import styled from "styled-components";

export const StyledLink = styled.a`
  display: flex;
  width: 100%;
  justify-content: center;
  padding: 0.5rem 0;
  margin-top: 1rem;
  font-size: 1.2rem;
  font-weight: bold;
  text-decoration: none;
  border-radius: 0.25rem;
  border: 2px solid
    ${({
      theme: {
        colors: { primary },
      },
    }) => primary};
  color: ${({
    theme: {
      colors: { text },
    },
  }) => text};
  background: ${({
    theme: {
      colors: { primary },
    },
  }) => primary};
  box-shadow: ${({
      theme: {
        colors: { primary },
      },
    }) => primary}88
    0px 3px 8px;
  transition: all 0.3s ease-in-out;
  cursor: pointer;

  &:first-child {
    margin-top: 0rem;
  }

  &:hover {
    background-color: ${({
      theme: {
        colors: { background },
      },
    }) => background};
    color: ${({
      theme: {
        colors: { primary },
      },
    }) => primary};
  }
`;

interface IStyledButtonProps {
  customMarginTop?: string;
  isModal?: boolean;
}

export const StyledButton = styled.button<IStyledButtonProps>`
  display: flex;
  width: 100%;
  justify-content: center;
  padding: 0.5rem 0;
  margin-top: ${({ customMarginTop }) =>
    customMarginTop ? customMarginTop : "1rem"};
  font-size: 1.2rem;
  font-weight: bold;
  text-decoration: none;
  border-radius: 0.25rem;
  border: 2px solid
    ${({
      theme: {
        colors: { primary },
      },
    }) => primary};
  color: ${({
    theme: {
      colors: { text },
    },
  }) => text};
  background: ${({
    theme: {
      colors: { primary },
    },
  }) => primary};
  box-shadow: ${({
      theme: {
        colors: { primary },
      },
    }) => primary}88
    0px 3px 8px;
  transition: all 0.3s ease-in-out;
  cursor: pointer;

  &:first-child {
    margin-top: 0rem;
  }

  &:hover {
    background-color: ${({
      isModal,
      theme: {
        colors: { background, text },
      },
    }) => (isModal ? text : background)};
    color: ${({
      theme: {
        colors: { primary },
      },
    }) => primary};
  }
`;

export const LinksWrapper = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  margin-top: 2rem;
`;
