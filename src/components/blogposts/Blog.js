import {
  BlogBox,
  BlogH4,
  BlogImg,
  BlogImgDiv,
  BlogParagraph,
  BlogTitle,
} from "./BlogStyles";

const BlogSection = (props) => {
  return (
    <BlogBox>
      <BlogImgDiv>
        <BlogImg src={props.img} alt="office image" />
      </BlogImgDiv>
      <BlogH4>{props.time}</BlogH4>
      <BlogTitle>{props.title}</BlogTitle>
      <BlogParagraph>{props.text}</BlogParagraph>
    </BlogBox>
  );
};

export default BlogSection;
