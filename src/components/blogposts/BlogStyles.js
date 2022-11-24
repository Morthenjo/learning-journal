import styled from "styled-components";

export const BlogH4 = styled.h4`
  margin: 0;
  padding: 0;
  font-weight: 400;
`;

export const BlogImgDiv = styled.div`
  width: 100%;
  height: 10rem;
  @media (min-width: 768px) {
    width: 20rem;
  }
`;

export const BlogImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const BlogTitle = styled.h1`
  margin: 0;
  padding: 0;
  font-size: 1.5rem;
`;

export const BlogParagraph = styled.p`
  margin: 1rem 0 2rem;
  padding: 0;
`;

export const BlogBox = styled.div`
  @media (min-width: 768px) {
    margin: 0 auto;
    width: 30%;
  }
`;
