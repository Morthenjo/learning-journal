import { AboutImgDiv, Box, Image } from "../components/Styles";
import Morthen from "../components/images/morthen.png";

const AboutPage = () => {
  return (
    <>
      <Box>
        <AboutImgDiv>
          <Image src={Morthen} />
        </AboutImgDiv>
        <h1>Hi there! My name is Morthen and welcome to my learning journal</h1>
      </Box>
    </>
  );
};

export default AboutPage;
