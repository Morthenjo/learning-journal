import styled from "styled-components";

export const Burger = styled.div`
  /* display: none; */

  @media screen and (max-width: 768px) {
    display: block;
    background: black;
    height: 0.3rem;
    width: 3rem;
    position: absolute;
    right: 1rem;
    animation: ${(props) =>
      props.active
        ? "yeet 1s ease 0s alternate both "
        : "yeet-after 1s ease 0s alternate both"};
    &:before,
    &:after {
      content: "";
      background: black;
      position: absolute;
      height: 3rem;
      width: 0.3rem;
      z-index: 3;
    }

    &:before {
      right: 1.3rem;
      top: 0;
      transform: rotate(90deg);
      animation: ${(props) =>
        props.active
          ? "top 1s ease 0s alternate both "
          : "top-after 1s ease 0s alternate both"};
    }

    &:after {
      right: 1.3rem;
      top: -2.5rem;
      transform: rotate(-90deg);
      animation: ${(props) =>
        props.active
          ? "bottom 1s ease 0s alternate both"
          : "bottom-after 1s ease 0s alternate both"};
    }
  }

  @keyframes top {
    from {
    }
    to {
      top: -1.5rem;
      right: 3.5rem;
      transform: rotate(-45deg);
    }
  }
  @keyframes bottom {
    0% {
    }
    100% {
      top: -1.5rem;
      right: 3.5rem;
      transform: rotate(45deg);
    }
  }
  @keyframes top-after {
    from {
      transform: rotate(-45deg);

      top: -1.5rem;
      right: 3.5rem;
    }
    to {
    }
  }
  @keyframes bottom-after {
    from {
      transform: rotate(45deg);

      top: -1.5rem;
      right: 3.5rem;
    }
    to {
    }
  }

  @keyframes yeet {
    from {
      right: 4rem;
      top: 4rem;
    }
    to {
      top: 4rem;
      background: rgba(0, 0, 0, 0);
    }
  }
  @keyframes yeet-after {
    from {
      top: 4rem;
      background: rgba(0, 0, 0, 0);
    }
    to {
      right: 4rem;
      top: 4rem;
    }
  }
`;
