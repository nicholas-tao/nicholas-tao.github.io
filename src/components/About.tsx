/* eslint-disable react/no-unescaped-entities */
import React from "react";
import styled, { keyframes } from "styled-components";
import me from "../assets/img/me.jpg";
import { Hobbies } from "./Hobbies";

export const About = () => {
  return (
    <Wrapper>
      <Me src={me} alt="NT" height="200px" width="200px" />
      <Greeting>
        <Wave>👋</Wave> Nice to meet you, I'm Nicholas
      </Greeting>
      <Body>
        I'm a 2nd year Computer Science student at the University of Waterloo.
        <br />
        <br />
        I'm currently building the future of wholesale as a Frontend Engineer
        Intern at Faire and seeking Winter 2022 internships.
        <br />
        <br />
        From connecting university students through{" "}
        <Link href="https://omegu.herokuapp.com/">Wave Chat</Link>, to making
        job hunting easier with{" "}
        <Link href="https://devpost.com/software/applyai">ApplyAI</Link>, to
        tracking grocery store lineups with{" "}
        <Link href="https://devpost.com/software/lynz">Lynz</Link>, I'm always
        looking to tackle interesting challenges.
        <br />
        <br />
        <Hobbies />
        I started my channel in May 2020 to document my university experience
        and now make videos about software engineering/tech and my journey as a
        CS student trying to figure out life.
        <br />
        <br />
        Got an exciting opportunity or want to learn more about me?{" "}
        <Link href="https://www.linkedin.com/in/nicholastao">Let's chat.</Link>
      </Body>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
`;

const Me = styled.img`
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
  animation-iteration-count: 2;
  transform-origin: 70% 70%;
  display: inline-block;
`;

export const Link = styled.a`
  font-weight: bold;
  text-decoration: none;
  color: black;
  :hover {
    color: #3aa17b;
  }
`;

const Body = styled.p`
  font-size: 20px;
  max-width: 1100px;
`;
