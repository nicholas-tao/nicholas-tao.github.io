/* eslint-disable react/no-unescaped-entities */

import {
  faGithub,
  faLinkedinIn,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import styled, { keyframes } from "styled-components";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { List } from "./List";
import React from "react";
import headshot from "../assets/img/headshot.jpg";
import { hobbies } from "../data/hobbies";
import { internships } from "../data/internships";

export const Home = () => {
  return (
    <Wrapper>
      <Headshot src={headshot} alt="NT" height="225px" width="225px" />
      <Greeting>
        <Wave>👋</Wave> Nice to meet you, I'm Nicholas
      </Greeting>
      <Body>
        I'm a 3rd year Computer Science student at the University of Waterloo.
        This January, I'll be joining{" "}
        <Link href="https://www.ethglobal.com/">ETHGlobal</Link> in building the
        most valuable community in web3.
        <List description="Previously, I" items={internships} />
        I'm currently seeking <b>Summer 2024</b> opportunities!
        <PastProjects />
        <List description="In my free time, you can find me" items={hobbies} />
        <Youtube />
        Always happy to meet new people and hear about exciting opportunities!{" "}
        <Link href="https://www.linkedin.com/in/nicholastao">Let's chat.</Link>
        <IconLinks />
      </Body>
    </Wrapper>
  );
};

const PastProjects = () => {
  return (
    <SectionWrapper>
      From connecting university students through{" "}
      <Link href="https://omegu.herokuapp.com/">Wave Chat</Link>, to making job
      hunting easier with{" "}
      <Link href="https://devpost.com/software/applyai">ApplyAI</Link>, to
      tracking grocery store lineups with{" "}
      <Link href="https://devpost.com/software/lynz">Lynz</Link>, I'm always
      looking to tackle interesting challenges. Read more about my work{" "}
      <Link href="/projects" bgColour="#cae8dd">
        here
      </Link>
      .
    </SectionWrapper>
  );
};

const Youtube = () => {
  return (
    <SectionWrapper>
      I started{" "}
      <Link href="https://www.youtube.com/c/NicholasT/" bgColour="#cae8dd">
        my channel
      </Link>{" "}
      in May 2020 to document my university experience, but now make videos
      about software engineering/tech and my journey as a CS student trying to
      figure out life.
    </SectionWrapper>
  );
};

const IconLinks = () => {
  return (
    <SectionWrapper>
      <Icons>
        <a href="https://www.github.com/nicholas-tao">
          <Icon icon={faGithub} color="grey" />
        </a>
        <a href="https://www.linkedin.com/in/nicholastao">
          <Icon icon={faLinkedinIn} color="grey" />
        </a>
        <a href="https://www.youtube.com/@nicholast">
          <Icon icon={faYoutube} color="grey" />
        </a>
      </Icons>
    </SectionWrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
`;

const Headshot = styled.img`
  border-radius: 50%;
`;

const Greeting = styled.h1`
  text-align: center;
  @media only screen and (max-width: 600px) {
    font-size: 30px;
    margin-bottom: 0;
  }
`;

const waveAnimation = keyframes`
    0% { transform: rotate( 0.0deg) }
   10% { transform: rotate(14.0deg) } 
   20% { transform: rotate(-8.0deg) }
   30% { transform: rotate(14.0deg) }
   40% { transform: rotate(-4.0deg) }
   50% { transform: rotate(10.0deg) }
   60% { transform: rotate( 0.0deg) } 
  100% { transform: rotate( 0.0deg) }
`;

const Wave = styled.span`
  animation: ${waveAnimation} 2.5s;
  animation-iteration-count: 3;
  transform-origin: 70% 70%;
  display: inline-block;
`;

export const Link = styled.a<{ bgColour?: string }>`
  font-weight: bold;
  text-decoration: none;
  color: black;
  :hover {
    color: #3aa17b;
  }
  background-color: ${(props) => props.bgColour};
`;

const Body = styled.p`
  font-size: 20px;
  max-width: 1100px;
`;

const Icons = styled.div`
  display: flex;
  column-gap: 20px;
  margin-top: 50px;
`;

const Icon = styled(FontAwesomeIcon)`
  :hover {
    color: black;
  }
`;

const SectionWrapper = styled.div`
  margin: 16px 0px;
`;
