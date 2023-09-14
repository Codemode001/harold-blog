import React from "react";
import styled from "styled-components";

const BlogCards = ({ type }: { type: string }) => {
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
    border: solid 1px black;
    transition: border-color 0.3s ease;
    cursor: pointer;

    &:hover {
      border-color: lightblue;
      box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
    }
  `;

  return <Main>BlogCards</Main>;
};

export default BlogCards;
