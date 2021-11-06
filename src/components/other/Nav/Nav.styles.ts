import styled from "styled-components";

interface Props {
  isMenuOpen: boolean;
  children: React.ReactNode;
  isScrolled: boolean;
}

export const StyledNav = styled.nav<Props>`
  height: 100%;

  @media only screen and (max-width: ${({ theme }) => theme.menuBreakPoint}) {
    width: 100%;
    position: absolute;
    left: 0;
    top: ${({ theme: { headerHeight } }) => headerHeight};
    height: calc(100vh - ${({ theme: { headerHeight } }) => headerHeight});
    background-color: ${({ isMenuOpen }) =>
      isMenuOpen ? "#00000099" : "transparent"};
  }

  ul {
    display: flex;
    height: 100%;
    list-style: none;
    transition: all 0.4s ease-in-out;

    @media only screen and (max-width: ${({ theme }) => theme.menuBreakPoint}) {
      flex-direction: column;
      position: relative;
      z-index: 10;
      top: 0;
      left: 0;
      width: 100%;
      display: ${({ isMenuOpen }) => (isMenuOpen ? "block" : "none")};
    }
    z-index: 1000;

    li {
      height: 100%;

      @media only screen and (max-width: ${({ theme }) =>
          theme.menuBreakPoint}) {
        background-color: ${({ theme }) => theme.colors.background};
        height: auto;
        a {
          color: ${({ theme }) => theme.colors.text};
        }
        &:nth-child(odd) {
          background-color: ${({ theme }) => theme.colors.primary};
          a {
            color: ${({ theme }) => theme.colors.text};
          }
        }
      }

      a {
        text-decoration: none;
        display: flex;
        position: relative;
        align-items: center;
        height: 100%;
        padding: 0 3rem;
        color: ${({
          theme: {
            colors: { text },
          },
        }) => text};
        font-weight: 700;
        font-size: 1.3rem;
        transition: all 0.3s ease-in-out;

        @media only screen and (max-width: ${({ theme }) =>
            theme.menuBreakPoint}) {
          padding: 1rem 3rem;
        }

        &::before {
          display: block;
          position: absolute;
          content: "";
          height: 5px;
          width: 0;
          bottom: 0;
          left: 50%;
          background-color: ${({
            isScrolled,
            theme: {
              colors: { primary, background },
            },
          }) => (isScrolled ? primary : background)};
          transition: all 0.3s ease-in-out;
        }
        &::after {
          display: block;
          position: absolute;
          content: "";
          height: 5px;
          width: 0;
          bottom: 0;
          left: 50%;
          background-color: ${({
            isScrolled,
            theme: {
              colors: { primary, background },
            },
          }) => (isScrolled ? primary : background)};
          transition: all 0.4s ease-in-out;
        }

        &:hover,
        &:focus {
          @media only screen and (min-width: ${({ theme }) =>
              theme.menuBreakPoint}) {
            color: ${({
              isScrolled,
              theme: {
                colors: { primary, background },
              },
            }) => (isScrolled ? primary : background)};

            &::before {
              left: 0;
              width: 50%;
            }
            &::after {
              width: 50%;
            }
          }
        }
      }
    }
  }
`;
