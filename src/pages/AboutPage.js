import {
  AboutH1,
  AboutH3,
  AboutImgDiv,
  AboutP,
  Box,
  Flex,
  Image,
  StyledA,
} from "../components/Styles";
import Morthen from "../components/images/morthen.png";

const AboutPage = () => {
  return (
    <>
      <Box>
        <Flex>
          <AboutImgDiv>
            <Image src={Morthen} />
          </AboutImgDiv>
          <div>
            <AboutH1>
              Hi there! My name is Morthen and welcome to my learning journal
            </AboutH1>
            <AboutP>
              After several months of learning in the Frontend Developer Career
              Path, I've made a couple of projects and even a portfolio
            </AboutP>
            <AboutP>
              <StyledA
                href="https://morthenjo.github.io"
                target="_blank"
                rel="noopener noreferrer"
              >
                Portfolio
              </StyledA>

              <StyledA
                href="https://github.com/Morthenjo?tab=repositories"
                target="_blank"
                rel="noopener noreferrer"
              >
                Github Repo
              </StyledA>
            </AboutP>
          </div>
          <div>
            <AboutH3>How i stay committed to learning</AboutH3>
            <AboutP>
              I find it very fun to work with code, I find it to be a chore to
              actually input the content of the page, but the layout, making it
              dynamically and the functions I add to it. I'm still learning to
              not spend too much time on that.
            </AboutP>
            <AboutP>
              I've also found out that helping other people with their problems
              is a good way to assess what I've learned myself or just helps me
              learn it better.
            </AboutP>
          </div>
        </Flex>
      </Box>
    </>
  );
};

export default AboutPage;
