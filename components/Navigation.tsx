"use client";
import React from "react";
import styled from "styled-components";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const Navigation = () => {
  return (
    <Main>
      <div className="flex w-[45%] justify-between items-center h-[50%]">
        <h1>
          <span style={{ color: "#18a9fc" }}>{"<"}</span> The Harold Blog{" "}
          <span style={{ color: "#18a9fc" }}>{"/ >"}</span>
        </h1>

        <KnowMeMore href="https://haroldcreative.netlify.app/" target="_blank">
          Know me more
        </KnowMeMore>

        <ViewCode
          href="https://github.com/Codemode001/harold-blog"
          target="_blank"
          className="cursor-pointer"
        >
          View Source Code
        </ViewCode>
      </div>
      <div className="flex  justify-center">
        <div className="flex" style={{ gap: "1rem", color: "#663eff" }}>
          <div className="cursor-pointer">
            <FacebookIcon />
          </div>
          <div className="cursor-pointer">
            <InstagramIcon />
          </div>
          <div className="cursor-pointer">
            <GitHubIcon />
          </div>
          <div className="cursor-pointer">
            <LinkedInIcon />
          </div>
        </div>
      </div>
    </Main>
  );
};

export default Navigation;

const ViewCode = styled.a`
  border-bottom: 1px solid transparent;
  transition: border-bottom 0.5s ease;

  &:hover {
    border-bottom: 1px solid #f5df68;
  }
`;

const KnowMeMore = styled.a`
  background-color: #18a9fc;
  width: 25%;
  height: 80%;
  border-radius: 2rem;
  color: white;
  transition: transform 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  &:hover {
    transform: scale(1.1);
  }
`;

const Main = styled.div`
  height: 6rem;
  display: flex;
  align-items: center;
  padding: 0 2rem;
  justify-content: space-between;

  & h1 {
    font-size: 1.2rem;
    font-weight: 600;
  }
`;
