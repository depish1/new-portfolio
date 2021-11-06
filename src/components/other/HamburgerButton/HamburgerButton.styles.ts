import styled from "styled-components";

export const StyledHamburgerButton = styled.button`
  border: none;
  transition: all 0.4s ease-in-out;
  padding: 0 2rem;
  background-color: transparent;
  cursor: pointer;
  height: 100%;
  position: absolute;
  top: 0;
  right: 0;

  @media only screen and (min-width: ${({ theme }) => theme.menuBreakPoint}) {
    display: none;
  }

  .hamburger__wrapper {
    width: 2.5rem;
    height: 2.5rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    position: relative;
    transition: all 0.4s ease-in-out;
  }

  .hamburger__line {
    display: block;
    width: 120%;
    height: 6px;
    background-color: ${({ theme }) => theme.colors.text};
    content: "";
    border-radius: 5px;
    transition: all 0.4s ease-in-out;

    &--top {
      transform-origin: left top;
    }
    &--bottom {
      transform-origin: left bottom;
    }
  }

  .isOpen {
    transform-origin: 50% 50%;
    transform: rotate(360deg);

    .hamburger__line {
      width: 3.1rem;
      &--top {
        transform: rotate(45deg);
      }
      &--middle {
        width: 0;
      }
      &--bottom {
        transform: rotate(-45deg);
      }
    }
  }
`;
