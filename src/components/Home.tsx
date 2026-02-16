/* eslint-disable react/no-unescaped-entities */

import {
  IconDefinition,
  faGithub,
  faLinkedinIn,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import styled, { keyframes } from "styled-components";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { List } from "./List";
import React from "react";
import headshot from "../assets/img/nick.jpg";
import { hobbies } from "../data/hobbies";
import { internships } from "../data/internships";

export const Home = () => {
  return (
    <Wrapper>
      <Header>
        <Greeting>
          <h1>
            <Wave>👋</Wave>Nice to meet you, I'm Nicholas
          </h1>
          <IconLinks />
        </Greeting>
        <Headshot src={headshot} alt="NT" height="225px" width="225px" />
      </Header>
      <Body>
        I'm a Software Engineer based in New York City, currently working on some exciting projects I can't talk about yet. I recently graduated from the University of Waterloo with a degree in Computer Science, where I completed six internships at fast-growing tech companies, building everything from developer tools to crypto payment systems.
        <List description="During my internships, I" items={internships} />
        <PastProjects />
        <List description="In my free time, you can find me" items={hobbies} />
        <Youtube />
        I'm always open to connecting with fellow engineers, discussing interesting projects, and exploring new opportunities.{" "}
        <Link href="https://www.linkedin.com/in/nicholastao">Let's connect!</Link>
      </Body>
    </Wrapper>
  );
};

const PastProjects = () => {
  return (
    <SectionWrapper>
      I love building products that solve real problems. From connecting
      university students through{" "}
      <Link href="https://omegu.herokuapp.com/">Wave Chat</Link>,
      to automating job applications with{" "}
      <Link href="https://devpost.com/software/applyai">ApplyAI</Link>, to
      helping people avoid crowded stores with{" "}
      <Link href="https://devpost.com/software/lynz">Lynz</Link>, I'm always
      looking to tackle interesting challenges. Check out some of my projects{" "}
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
      I've been documenting my entire tech journey on{" "}
      <Link href="https://www.youtube.com/c/NicholasT/" bgColour="#cae8dd">
        my YouTube channel
      </Link>{" "}
      since 2020—from figuring out university to landing internships, to the real
      lessons learned as I navigate the industry, now with 165k subscribers and
      21 million views.
    </SectionWrapper>
  );
};

const IconLink = ({ icon, href }: { icon: IconDefinition; href: string }) => {
  return (
    <a href={href} target="_blank" rel="noreferrer">
      <Icon icon={icon} color="grey" />
    </a>
  );
};

const IconLinks = () => {
  return (
    <Icons>
      <IconLink icon={faGithub} href="https://www.github.com/nicholas-tao" />
      <IconLink
        icon={faLinkedinIn}
        href="https://www.linkedin.com/in/nicholastao"
      />
      <IconLink icon={faYoutube} href="https://www.youtube.com/@nicholast" />
    </Icons>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;
`;

const Headshot = styled.img`
  border-radius: 50%;
`;

const Greeting = styled.div`
  text-align: center;
  margin-bottom: 0;
  @media only screen and (max-width: 600px) {
    font-size: 30px;
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

export const Link = ({
  href,
  children,
  bgColour,
}: {
  href: string;
  children: React.ReactNode;
  bgColour?: string;
}) => {
  return (
    <StyledATag
      href={href}
      target="_blank"
      rel="noreferrer"
      bgColour={bgColour}
    >
      {children}
    </StyledATag>
  );
};

const StyledATag = styled.a<{ bgColour?: string }>`
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
  margin-top: 24px;
`;

const Icon = styled(FontAwesomeIcon)`
  :hover {
    color: black;
  }
`;

const SectionWrapper = styled.div`
  margin: 16px 0px;
`;

const Header = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 30px;
  @media only screen and (max-width: 600px) {
    flex-direction: column-reverse;
  }
`;
