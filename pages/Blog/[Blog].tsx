"use client";
import React from "react";
import styled from "styled-components";
import Divider from "@mui/material/Divider";
import HomeIcon from "@mui/icons-material/Home";
import Link from "next/link";
import { useRouter } from "next/router";

import "../../app/globals.css";
import data from "../../data/data.json";

const Blog = () => {
  const router = useRouter();
  const id = router.query.Blog;
  const finalId = id ? parseInt(id as string, 10) : 0;

  const title = data[finalId].title;
  const number = data[finalId].id;
  const imagesrc = data[finalId].image;
  const content1 = data[finalId].content1;
  const content2 = data[finalId].content2;
  const content3 = data[finalId].content3;

  return (
    <Main>
      <div className="w-full pl-10 pt-5">
        <Link href="/">
          <HomeIcon style={{ color: "#663eff" }} />
        </Link>
      </div>
      <Container>
        <div className="flex justify-between items-center">
          <Title>{title}</Title>
          <h1>Blog {number}</h1>
        </div>
        <Image src={imagesrc} />
        <div>
          <Content>{content1}</Content>
          <Content>{content2}</Content>
          <Content>{content3}</Content>
        </div>
        <div style={{ margin: "3rem 0 1rem 0" }}>
          <Divider />
        </div>
        <div className="flex justify-center mb-10">
          <div>Harold Pisos</div>
        </div>
      </Container>
    </Main>
  );
};

export default Blog;

const Content = styled.div`
  margin: 2rem 0;
  font-size: 1rem;
  letter-spacing: 1px;
`;

const Image = styled.img`
  width: 100%;
  height: 25rem;
  object-fit: cover;
  margin-top: 1rem;
`;

const Title = styled.h1`
  font-size: 3rem;
`;

const Container = styled.div`
  width: 80%;
  padding-top: 4rem;
`;

const Main = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  flex-direction: column;
`;
