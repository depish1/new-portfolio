import styled from "styled-components";

interface Props {
  isSuccess: boolean;
}

export const StyledSendingResult = styled.div<Props>`
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
    margin-top: 1rem;
    height: 64px;
    width: 64px;
    fill: ${({
      isSuccess,
      theme: {
        colors: { error, success },
      },
    }) => (isSuccess ? success : error)};
  }
`;
