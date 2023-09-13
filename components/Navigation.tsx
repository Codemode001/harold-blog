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
      <div className="flex w-[30%] justify-between">
        <h1>
          <span style={{ color: "#18a9fc" }}>{"<"}</span> The Harold Blog{" "}
          <span style={{ color: "#18a9fc" }}>{"/ >"}</span>
        </h1>
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
      <div className="flex w-[20%] justify-center">
        <KnowMeMore>Know me more</KnowMeMore>
      </div>
    </Main>
  );
};

export default Navigation;

const KnowMeMore = styled.button`
  background-color: #18a9fc;
  width: 60%;
  height: 2.5rem;
  border-radius: 2rem;
  color: white;
  transition: transform 0.3s ease;

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
