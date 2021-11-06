import styled from "styled-components";

interface Props {
  isScrolled: boolean;
  isMenuOpen: boolean;
}

export const StyledHeader = styled.header<Props>`
  position: fixed;
  top: 0px;
  z-index: 20;
  height: ${({ theme: { headerHeight } }) => headerHeight};
  width: 100%;
  max-width: 100vw;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: ${({ theme }) => theme.colors.text};
  background-color: ${({
    isScrolled,
    theme: {
      colors: { primary },
    },
  }) => (isScrolled ? `transparent` : primary)};
  backdrop-filter: blur(0.25rem);
  padding: 0 4rem;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px,
    rgba(0, 0, 0, 0.22) 0px 10px 10px;
  transition: all 0.8s ease-in-out;

  @media only screen and (max-width: calc(${({ theme }) =>
      theme.menuBreakPoint} + 100px)) {
    padding: 0 2rem;
  }

  @media only screen and (max-width: ${({ theme }) => theme.menuBreakPoint}) {
    padding: 0 1rem;
    z-index: 9999;
    ${({
      isMenuOpen,
      theme: {
        colors: { background },
      },
    }) => isMenuOpen && `background: ${background};`}
  }
`;

export const StyledLogo = styled.div<Props>`
  display: flex;
  align-items: center;
  font-size: 2.2rem;
  font-weight: bold;
  color: ${({
    isScrolled,
    isMenuOpen,
    theme: {
      colors: { primary, background },
    },
  }) => (isScrolled ? primary : background)};
  position: relative;
  border-bottom: dashed 4px ${({ theme }) => theme.colors.text};
  transition: all 0.8s ease-in-out;

  .left {
    transform: rotate(-90deg);
  }
  .right {
    position: relative;
    top: 1px;
  }

  @media only screen and (max-width: calc(${({ theme }) =>
      theme.menuBreakPoint} + 100px)) {
    ${({
      isMenuOpen,
      theme: {
        colors: { primary },
      },
    }) => isMenuOpen && `color: ${primary}`};
  }
`;
