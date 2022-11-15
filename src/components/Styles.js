import styled from "styled-components";
import { NavLink as Link } from "react-router-dom";

export const Nav = styled.nav`
  height: 4rem;
  position: absolute;
  background-color: white;
  top: 0;
  width: 100%;
  display: flex;
  justify-content: left;
  padding: 1rem;
  transition: all 1s;
  @media (min-width: 768px) {
    width: 80%;
    background-color: red;
    margin: 0 10%;
    height: 7rem;
  }
`;

export const NavLink = styled(Link)`
  color: black;
  align-items: center;
  text-decoration: none;
  height: 100%;
  cursor: pointer;
  &.active {
    color: grey;
  }
`;

export const NavLogo = styled.img`
  margin-top: 0rem;
  height: 1rem;
  @media (min-width: 768px) {
    height: 2rem;
  }
`;

export const NavMenu = styled.div`
  display: flex;
  transform: ${(props) => (props.active ? "none" : "translateY(-10rem)")};
  justify-content: center;
  position: absolute;
  transition: 1s;
  gap: 1rem;
  margin-left: 2rem;
  @media (min-width: 768px) {
    transform: none;
    right: 0;
    margin-right: 2rem;
    gap: 2rem;
  }
`;

export const NavBarTitle = styled.h3`
  transform: ${(props) => (props.active ? "translateY(-10rem)" : "none")};
  width: 50%;
  margin-left: 1rem;
  transition: 1s;
  margin-top: 0;
  @media (min-width: 768px) {
    margin-top: -0.5rem;
  }
`;

export const HomePageTitle = styled.h1``;

export const HomePageBG = styled.div`
  padding: 10rem 10% 0;
`;

export const Box = styled.div`
  padding: 0 10%;
  display: flex;
  gap: 2rem;
  flex-direction: column;
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
  overflow: hidden;
  margin-bottom: -1.2rem;
`;

export const AboutImgDiv = styled.div`
  width: 50%;
  margin-top: 4rem;
  border-radius: 50% 50% 0 0;
  margin-bottom: 1rem;
  background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
  animation: gradient 15s ease infinite;
  background-size: 100% 100%;
  @keyframes gradient {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }
`;
