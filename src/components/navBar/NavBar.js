import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import AboutPage from "../../pages/AboutPage";
import ErrorPage from "../../pages/ErrorPage";
import HomePage from "../../pages/HomePage";
import { Burger } from "../burger/Burger";
import { Nav, NavBarTitle, NavLink, NavLogo, NavMenu } from "../Styles";
import Logo from "./NavbarLogo.png";

const NavBar = () => {
  const [active, setActive] = useState();
  const Toggle = () => {
    setActive(!active);
  };
  return (
    <>
      <Burger onClick={Toggle} active={active} />
      <Nav>
        <NavLogo src={Logo} alt="Logo" />
        <NavBarTitle active={active}>My learning Journal</NavBarTitle>

        <NavMenu active={active}>
          <NavLink to="/">HOME</NavLink>
          <NavLink to="/about">ABOUT ME</NavLink>
        </NavMenu>
      </Nav>
      <Routes>
        <Route path="*" element={<ErrorPage />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
    </>
  );
};

export default NavBar;
