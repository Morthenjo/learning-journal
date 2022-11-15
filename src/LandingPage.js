import { HashRouter } from "react-router-dom";
import Footer from "./components/Footer";
import NavBar from "./components/navBar/NavBar";

const LandingPage = () => {
  return (
    <HashRouter>
      <NavBar />
      <Footer />
    </HashRouter>
  );
};

export default LandingPage;
