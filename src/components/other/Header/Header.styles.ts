import styled from "styled-components";

export const StyledHeader = styled.header`
  position: fixed;
  top: 0;
  z-index: 20;
  height: ${({ theme }) => theme.headerHeight};
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: ${({ theme }) => theme.colors.yellow};
  background-color: ${({ theme }) => theme.colors.black};
  padding: 0 4rem;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px,
    rgba(0, 0, 0, 0.22) 0px 10px 10px;

  @media only screen and (max-width: calc(${({ theme }) =>
      theme.menuBreakPoint} + 100px)) {
    padding: 0 2rem;
  }

  @media only screen and (max-width: ${({ theme }) => theme.menuBreakPoint}) {
    padding: 0 1rem;
  }
`;

export const StyledLogo = styled.div`
  display: flex;
  align-items: center;
  font-size: 2.5rem;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.yellowHover};
  position: relative;
  border-bottom: dashed 4px ${({ theme }) => theme.colors.yellow};

  .left {
    transform: rotate(-90deg);
  }
  .right {
    position: relative;
    top: 1px;
  }
`;
