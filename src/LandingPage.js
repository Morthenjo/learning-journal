import { HashRouter } from "react-router-dom";
import NavBar from "./components/navBar/NavBar";

const LandingPage = () => {
  return (
    <HashRouter>
      <NavBar />
    </HashRouter>
  );
};

export default LandingPage;
