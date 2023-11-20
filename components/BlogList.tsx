"use client";
import React from "react";
import styled from "styled-components";

import BlogCards from "./small/BlogCards";

const BlogList = () => {
  return (
    <Main>
      <Container>
        <LatestBlog>
          <div
            className="flex"
            style={{
              flexDirection: "column",
              alignItems: "center",
              maxHeight: "75%",
            }}
          >
            <h1>Latest Blog</h1>
            <BlogCards type="primary" blogId={3} />
          </div>
          <div className="flex justify-center h-[25%]">
            <div className="flex justify-between w-[90%]">
              <div>
                <BlogCards type="secondary" blogId={2} />
              </div>
              <div>
                <BlogCards type="secondary" blogId={1} />
              </div>
              <div>
                <BlogCards type="secondary" blogId={0} />
              </div>
            </div>
          </div>
        </LatestBlog>
        <AllBlogs>
          <h1 className="mb-10 mt-5">All blogs</h1>
          <div
            className="w-full h-full flex"
            style={{
              alignItems: "center",
              flexDirection: "column",
              gap: "1rem",
            }}
          >
            <BlogCards type="archive" blogId={0} />
            <BlogCards type="archive" blogId={0} />
            <BlogCards type="archive" blogId={0} />
          </div>
        </AllBlogs>
      </Container>
    </Main>
  );
};

export default BlogList;

const AllBlogs = styled.div`
  width: 20%;
  display: flex;
  flex-direction: column;
  align-items: center;
  & h1 {
    font-weight: 600;
    font-size: 1rem;
  }
`;

const LatestBlog = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  & h1 {
    font-weight: 600;
    font-size: 1.5rem;
  }
`;

const Container = styled.div`
  width: 90%;
  display: flex;
  justify-content: space-between;
`;

const Main = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
`;
