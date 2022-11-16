import BlogData from "../components/blogposts/BlogData";
import BlogSection from "../components/blogposts/Blog";
import { BlogFlex, Box } from "../components/Styles";

const HomePage = () => {
  const Blogs = BlogData.filter((item, idx) => idx < 3).map((item) => {
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
      <Box>
        <BlogFlex>{Blogs}</BlogFlex>
      </Box>
    </>
  );
};

export default HomePage;
