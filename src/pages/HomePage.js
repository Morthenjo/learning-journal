import BlogData from "../components/blogposts/BlogData";
import BlogSection from "../components/blogposts/Blog";
import {
  BlogFlex,
  Box,
  DisplayButton,
  FrontPageH1,
  FrontPageH3,
  FrontPageHeader,
  FrontPageP,
} from "../components/Styles";
import { useState } from "react";

const HomePage = () => {
  let [active, setActive] = useState(true);

  const toggleHandler = () => {
    setActive(!active);
  };

  const Blogs = BlogData.filter(
    (item, idx) => idx < (active ? 3 : BlogData.length)
  ).map((item) => {
    return (
      <BlogSection
        key={item.id}
        img={item.img}
        title={item.title}
        time={item.time}
        text={item.text}
      />
    );
  });
  return (
    <>
      <FrontPageHeader>
        <FrontPageH3>02.03.2022</FrontPageH3>
        <FrontPageH1>My new journey as a bootcamp student</FrontPageH1>
        <FrontPageP>
          After several months of learning in the Frontend Developer Career
          Path, I've made a couple of projects and even a portfolio
        </FrontPageP>
      </FrontPageHeader>
      <Box>
        <BlogFlex>{Blogs}</BlogFlex>
        <DisplayButton onClick={toggleHandler}>
          {active ? "View More" : "View Less"}
        </DisplayButton>
      </Box>
    </>
  );
};

export default HomePage;
