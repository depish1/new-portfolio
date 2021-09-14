import styled from "styled-components";

interface Props {
  isMenuOpen: boolean;
  children: React.ReactNode;
}

export const StyledNav = styled.nav<Props>`
  height: 100%;

  ul {
    display: flex;
    height: 100%;
    list-style: none;
    transition: all 0.4s ease-in-out;

    @media only screen and (max-width: ${({ theme }) => theme.menuBreakPoint}) {
      flex-direction: column;
      position: absolute;
      background-color: red;
      top: ${({ theme }) => theme.headerHeight};
      left: 0;
      width: 100%;
      height: calc(100vh - ${({ theme }) => theme.headerHeight});
      transform: translateX(${({ isMenuOpen }) => (isMenuOpen ? "0" : "100%")});
    }

    li {
      height: 100%;

      @media only screen and (max-width: ${({ theme }) =>
          theme.menuBreakPoint}) {
        background-color: ${({ theme }) => theme.colors.blackHover};
        a {
          color: ${({ theme }) => theme.colors.yellowHover};
        }
        &:nth-child(odd) {
          background-color: ${({ theme }) => theme.colors.yellowHover};
          a {
            color: ${({ theme }) => theme.colors.blackHover};
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
        color: ${({ theme }) => theme.colors.yellow};
        font-weight: 700;
        font-size: 1.5rem;
        transition: all 0.3s ease-in-out;

        &::before {
          display: block;
          position: absolute;
          content: "";
          height: 5px;
          width: 0;
          bottom: 0;
          left: 50%;
          background-color: ${({ theme }) => theme.colors.yellow};
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
          background-color: ${({ theme }) => theme.colors.yellow};
          transition: all 0.3s ease-in-out;
        }

        &:hover,
        &:focus {
          @media only screen and (min-width: ${({ theme }) =>
              theme.menuBreakPoint}) {
            color: ${({ theme }) => theme.colors.yellowHover};
            background-color: ${({ theme }) => theme.colors.blackHover};

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
