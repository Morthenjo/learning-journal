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
`;

export const NavLink = styled(Link)`
  color: #808080;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  &.active {
    color: #000000;
  }
`;

export const NavLogo = styled.img`
  margin-top: 0rem;
  height: 1rem;
`;

export const NavMenu = styled.div`
  display: flex;
  transform: ${(props) => (props.active ? "none" : "translateY(-10rem)")};
  justify-content: center;
  position: absolute;
  transition: 1s;
  @media (min-width: 768px) {
    display: flex;
  }
`;

export const NavBtn = styled.nav`
  display: flex;
  align-items: center;
  margin-right: 24px;
`;

export const NavBtnLink = styled(Link)`
  border-radius: 4px;
  background: #808080;
  color: #000000;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  &:hover {
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: #808080;
  }
`;

export const NavBarTitle = styled.h3`
  transform: ${(props) => (props.active ? "translateY(-10rem)" : "none")};
  width: 50%;
  margin-left: 1rem;
  transition: 1s;
  margin-top: 0;
`;

export const HomePageTitle = styled.h1`
  margin-top: 10rem;
`;
