import styled from "styled-components";

export const StyledContactForm = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;

  label {
    display: flex;
    flex-direction: column;
    color: ${({ theme }) => theme.colors.text};
    font-weight: bold;
    font-size: 1.1rem;
    position: absolute;
    top: 3.1rem;
    left: 0.5rem;
    transition: all 0.3s ease-in-out;
  }
  input,
  textarea {
    margin-top: 2.5rem;
    padding: 0.5rem;
    color: ${({ theme }) => theme.colors.text};
    font-size: 1.1rem;
    background-color: ${({ theme }) => theme.colors.background};
    width: 100%;
    border: 2px inset ${({ theme }) => theme.colors.primary};
    border-radius: 5px;
  }

  textarea {
    height: 7rem;
  }

  .not-empty,
  input:focus + label,
  textarea:focus + label {
    top: 0.95rem;
    left: 0;
    color: ${({ theme }) => theme.colors.primary};
  }

  span {
    position: absolute;
    bottom: -1.5rem;
    font-size: 1rem;
    font-weight: bold;
    color: ${({ theme }) => theme.colors.error};
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
