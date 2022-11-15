import styled from "styled-components";

export const Burger = styled.div`
  display: none;

  @media screen and (max-width: 768px) {
    display: block;
    background: black;
    height: 0.2rem;
    width: 1.5rem;
    margin-top: -0.5rem;
    position: absolute;
    z-index: 3;
    animation: ${(props) =>
      props.active
        ? "yeet 1s ease 0s alternate both "
        : "yeet-after 1s ease 0s alternate both"};
    &:before,
    &:after {
      content: "";
      background: black;
      position: absolute;
      height: 1.5rem;
      width: 0.2rem;
      z-index: 3;
    }

    &:before {
      right: 0.65rem;
      top: -0.2rem;
      transform: rotate(90deg);
      animation: ${(props) =>
        props.active
          ? "top 1s ease 0s alternate both "
          : "top-after 1s ease 0s alternate both"};
    }

    &:after {
      right: 0.65rem;
      top: -1.15rem;
      transform: rotate(-90deg);
      animation: ${(props) =>
        props.active
          ? "bottom 1s ease 0s alternate both"
          : "bottom-after 1s ease 0s alternate both"};
    }
  }

  @keyframes top {
    0% {
    }
    20% {
      top: -0.6rem;
    }
    100% {
      top: -0.6rem;
      right: 0.6rem;
      transform: rotate(-45deg);
    }
  }
  @keyframes bottom {
    0% {
    }
    20% {
      top: -0.6rem;
    }
    100% {
      top: -0.6rem;
      right: 0.6rem;
      transform: rotate(45deg);
    }
  }
  @keyframes top-after {
    from {
      transform: rotate(-45deg);

      top: -0.6rem;
      right: 0.6rem;
    }
    80% {
      top: -0.6rem;
    }
    to {
    }
  }
  @keyframes bottom-after {
    from {
      transform: rotate(45deg);

      top: -0.6rem;
      right: 0.6rem;
    }
    80% {
      top: -0.6rem;
    }
    to {
    }
  }

  @keyframes yeet {
    from {
      right: 1rem;
      top: 2rem;
    }
    to {
      right: 1rem;
      top: 2rem;
      background: rgba(0, 0, 0, 0);
    }
  }
  @keyframes yeet-after {
    from {
      top: 2rem;
      right: 1rem;
      background: rgba(0, 0, 0, 0);
    }
    90% {
      background: rgba(0, 0, 0, 0.5);
    }
    to {
      right: 1rem;
      top: 2rem;
      background: rgba(0, 0, 0, 1);
    }
  }
`;
