import styled from "styled-components";

export const StyledLoader = styled.div`
  display: grid;
  grid-template-columns: 50% 50%;
  grid-gap: 0.3rem;
  animation-name: rotate;
  animation-duration: 2s;
  animation-iteration-count: infinite;

  .box {
    width: 2rem;
    height: 2rem;
    background-color: ${({
      theme: {
        colors: { white },
      },
    }) => white};
    position: relative;
    border-radius: 5px;

    &::after {
      position: absolute;
      top: 0;
      bottom: 0;
      right: 0;
      left: 0;
      content: "";
      background-color: ${({
        theme: {
          colors: { primary },
        },
      }) => primary};
      width: 2rem;
      height: 2rem;
      display: block;
      border-radius: 5px;
    }
  }

  .top-left {
    &::after {
      opacity: 1;
      animation-name: top-left;
      animation-duration: 2s;
      animation-iteration-count: infinite;
      animation-direction: alternate;
    }
  }
  .top-right {
    &::after {
      opacity: 0.8;
      animation-name: top-right;
      animation-duration: 2s;
      animation-iteration-count: infinite;
      animation-direction: alternate;
    }
  }
  .bottom-left {
    &::after {
      opacity: 0.6;
      animation-name: bottom-left;
      animation-duration: 2s;
      animation-iteration-count: infinite;
      animation-direction: alternate;
    }
  }
  .bottom-right {
    &::after {
      opacity: 0.4;
      animation-name: bottom-right;
      animation-duration: 2s;
      animation-iteration-count: infinite;
      animation-direction: alternate;
    }
  }

  @keyframes rotate {
    from {
      transform: rotate(0deg);
    }
    50% {
      transform: rotate(180deg);
    }
    to {
      transform: rotate(360deg);
    }
  }

  @keyframes top-left {
    from {
      opacity: 1;
    }
    17% {
      opacity: 0.8;
    }
    34% {
      opacity: 0.6;
    }
    51% {
      opacity: 0.4;
    }
    68% {
      opacity: 0.6;
    }
    85% {
      opacity: 0.8;
    }
    to {
      opacity: 1;
    }
  }
  @keyframes top-right {
    from {
      opacity: 0.8;
    }
    17% {
      opacity: 1;
    }
    34% {
      opacity: 0.8;
    }
    51% {
      opacity: 0.6;
    }
    68% {
      opacity: 0.4;
    }
    85% {
      opacity: 0.6;
    }
    to {
      opacity: 0.8;
    }
  }
  @keyframes bottom-left {
    from {
      opacity: 0.6;
    }
    17% {
      opacity: 0.8;
    }
    34% {
      opacity: 1;
    }
    51% {
      opacity: 0.8;
    }
    68% {
      opacity: 0.6;
    }
    85% {
      opacity: 0.4;
    }
    to {
      opacity: 0.6;
    }
  }
  @keyframes bottom-right {
    from {
      opacity: 0.4;
    }
    17% {
      opacity: 0.6;
    }
    34% {
      opacity: 0.8;
    }
    51% {
      opacity: 1;
    }
    68% {
      opacity: 0.8;
    }
    85% {
      opacity: 0.6;
    }
    to {
      opacity: 0.4;
    }
  }
`;
