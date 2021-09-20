import styled from "styled-components";

export const StyledContactForm = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;

  label {
    display: flex;
    flex-direction: column;
    color: ${({ theme }) => theme.colors.yellowHover};
    font-weight: bold;
    font-size: 1rem;
    position: absolute;
    top: 2.4rem;
    left: 0.5rem;
    transition: all 0.5s ease-in-out;
  }
  input,
  textarea {
    margin-top: 1.7rem;
    padding: 0.5rem;
    color: ${({ theme }) => theme.colors.yellow};
    font-size: 1rem;
    background-color: ${({ theme }) => theme.colors.blackHover};
    border-bottom: 1px solid ${({ theme }) => theme.colors.yellow};
    width: 100%;
    border: 2px inset ${({ theme }) => theme.colors.blackHover};
    border-radius: 5px;
  }

  textarea {
    height: 7rem;
  }

  input:valid + label,
  input:focus + label,
  textarea:valid + label,
  textarea:focus + label {
    top: 0.25rem;
    left: 0;
    color: ${({ theme }) => theme.colors.yellow};
  }
`;

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  margin: 0.5rem 0;

  &:first-child {
    margin-top: 0;
  }
  &:last-of-type {
    margin-bottom: 1rem;
  }
`;
