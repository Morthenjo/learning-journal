import { useState } from "react";
import AboutPage from "../../pages/AboutPage";
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
          <NavLink to={HomePage}>Home</NavLink>
          <NavLink to={AboutPage}>About</NavLink>
        </NavMenu>
      </Nav>
    </>
  );
};

export default NavBar;
