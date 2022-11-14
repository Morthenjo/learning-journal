import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import AboutPage from "../../pages/AboutPage";
import ErrorPage from "../../pages/ErrorPage";
import HomePage from "../../pages/HomePage";
import { Burger } from "../burger/Burger";
import { Nav, NavLink, NavLogo, NavMenu } from "../Styles";
import Logo from "./NavbarLogo.png";

const NavBar = () => {
  const [active, setActive] = useState();
  const Toggle = () => {
    setActive(!active);
  };
  return (
    <>
      <Burger onClick={Toggle} active={active} />
      <Nav active={active}>
        <NavLogo src={Logo} alt="Logo" />
        <NavMenu>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">About</NavLink>
        </NavMenu>
        <Routes>
          <Route path="*" element={<ErrorPage />} />
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </Nav>
    </>
  );
};

export default NavBar;
