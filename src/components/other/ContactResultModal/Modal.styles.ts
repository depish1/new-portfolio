import styled from "styled-components";

interface Props {
  isSuccess: boolean;
}

export const StyledModalContainer = styled.div<Props>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1000;
  background-color: #00000099;
  width: 100%;
  height: 100vh;

  .modal {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 2rem;
    border-radius: 5px;
    background: ${({
      theme: {
        colors: { text },
      },
    }) => text};
    color: ${({ theme }) => theme.colors.background};

    svg {
      margin-bottom: 1rem;
      height: 64px;
      width: 64px;
      fill: ${({
        isSuccess,
        theme: {
          colors: { error, success },
        },
      }) => (isSuccess ? success : error)};
    }
  }
`;
