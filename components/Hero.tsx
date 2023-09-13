"use client";
import React from "react";
import { TypeAnimation } from "react-type-animation";
import styled from "styled-components";

const Hero = () => {
  return (
    <Main>
      <Image src="https://res.cloudinary.com/dhhamkkue/image/upload/v1694616417/Me/Technology-Pisos_Harold_Rhey-Information_Technology_Lead_o4qtif.png" />
      <div style={{ width: "50%", textAlign: "center" }}>
        <h1>
          Unleash Your <span style={{ color: "#F5DF68" }}>POTENTIAL</span>
        </h1>
        <TypeAnimation
          sequence={[
            "Be Bold!",
            1000,
            "Be Resilient!",
            1000,
            "Be Entrepreneur!",
            2000,
          ]}
          wrapper="span"
          speed={50}
          style={{ fontSize: "2em", display: "inline-block" }}
          repeat={Infinity}
        />
      </div>
    </Main>
  );
};

export default Hero;

const Image = styled.img`
  height: 90%;
  width: 40%;
  object-fit: cover;
`;

const Main = styled.div`
  height: 30rem;
  display: flex;
  padding: 0 3rem;
  display: flex;
  align-items: center;

  h1 {
    font-size: 3.2rem;
    margin-bottom: 1rem;
    font-weight: 500;
  }
`;
