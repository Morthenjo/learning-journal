import {
  AboutH1,
  AboutH2,
  AboutH3,
  AboutHeader,
  AboutImgDiv,
  AboutP,
  AboutSection,
  Box,
  Flex,
  FlexRow,
  Image,
  StyledA,
} from "../components/Styles";
import Morthen from "../components/images/morthen.png";

const AboutPage = () => {
  return (
    <>
      <Box>
        <Flex>
          <FlexRow>
            <AboutImgDiv>
              <Image src={Morthen} />
            </AboutImgDiv>
            <AboutHeader>
              <AboutH1>
                Hi there! My name is Morthen and welcome to my learning journal
              </AboutH1>
              <AboutP>
                After several months of learning in the Frontend Developer
                Career Path, I've made a couple of projects and even a portfolio
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
            </AboutHeader>
          </FlexRow>
          <AboutSection>
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
            <AboutH3>How i got started</AboutH3>
            <AboutP>
              I had dabbled in coding when I was younger, playing around with
              flash, actionscript and animation. But after I needed a career
              change, I found a local course called KodeHode where I could learn
              more of the basics and build my coding back up.
            </AboutP>
            <AboutP>
              With the addition of both KodeHode and Scrimba, I'm speedrunning
              my way to working in the programming industry.
            </AboutP>
          </AboutSection>
          <AboutH2>Recent Posts</AboutH2>
        </Flex>
      </Box>
    </>
  );
};

export default AboutPage;
