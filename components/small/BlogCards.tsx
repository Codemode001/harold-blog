import React from "react";
import styled from "styled-components";
import { useRouter } from "next/navigation";

import data from "../../data/data.json";

const BlogCards = ({ type, blogId }: { type: string; blogId: number }) => {
  const router = useRouter();

  const Main = styled.div`
    width: ${type === "secondary"
      ? "17rem"
      : type === "primary"
      ? "90%"
      : type === "archive"
      ? "80%"
      : ""};
    height: ${type === "secondary"
      ? "100%"
      : type === "primary"
      ? "90%"
      : type === "archive"
      ? "17%"
      : ""};
    border: solid 1px transparent;
    transition: border-color 0.3s ease;
    cursor: pointer;
    border-radius: 1rem;
    overflow: hidden;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);

    &:hover {
      border-color: lightblue;
    }
  `;

  const redirectToBlog = () => {
    router.push(`/blog/${blogId}`);
  };

  const sampleTitle = data[blogId].title;
  const overview = data[blogId].overview;
  const imageLink = data[blogId].image;

  return (
    <Main onClick={redirectToBlog}>
      <Image src={imageLink} />
      <OverviewContainer>
        <div
          className="w-[90%] h-[90%]"
          style={
            type === "secondary" || type === "archive"
              ? {
                  overflow: "hidden",
                  display: "flex",
                  alignItems: "center",
                }
              : { overflow: "hidden", paddingTop: ".7rem" }
          }
        >
          <BlogTitle style={type === "secondary" ? { fontSize: "1rem" } : {}}>
            {sampleTitle}
          </BlogTitle>
          {type === "primary" ? <Overview>{overview}</Overview> : null}
        </div>
      </OverviewContainer>
    </Main>
  );
};

export default BlogCards;

const OverviewContainer = styled.div`
  height: 25%;
  width: 100%;
  display: flex;
  justify-content: center;
`;

const Overview = styled.div`
  font-family: italic;
  letter-spacing: 2px;
`;

const BlogTitle = styled.h1``;

const Image = styled.img`
  width: 100%;
  height: 75%;
  object-fit: cover;
  border-radius: 1rem 1rem 0 0;
  // transition: transform 0.3s ease;

  // &:hover {
  //   transform: scale(1.1);
  // }
`;
