import styled from "styled-components";

interface IStyledButtonLinkProps {
  textColor: string;
  bgColor: string;
}

export const StyledButtonLink = styled.a<IStyledButtonLinkProps>`
  display: flex;
  width: 150px;
  justify-content: center;
  padding: 0.5rem 0;
  margin-top: 1rem;
  font-size: 1.2rem;
  font-weight: bold;
  text-decoration: none;
  border: 2px solid ${({ bgColor }) => bgColor};
  border-radius: 0.25rem;
  color: ${({ textColor }) => textColor};
  background: ${({ bgColor }) => bgColor};
  transition: all 0.3s ease-in-out;
  box-shadow: ${({ bgColor }) => bgColor}88 0px 3px 8px;

  &:first-child {
    margin-top: 0rem;
  }

  &:hover {
    background-color: ${({ textColor }) => textColor};
    color: ${({ bgColor }) => bgColor};
  }

  @media only screen and (min-width: ${({ theme }) =>
      theme.buttonsBreakPoint}) {
    margin-right: 1rem;
    &:first-child {
      margin-top: 1rem;
    }
    &:last-child {
      margin-right: 0rem;
    }
  }
`;

export const ButtonsWrapper = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  margin-top: 2rem;

  @media only screen and (min-width: ${({ theme }) =>
      theme.buttonsBreakPoint}) {
    flex-direction: row;
    justify-content: space-between;
  }
`;
