/* eslint-disable react/no-unescaped-entities */

import styled, { keyframes } from "styled-components";

import { Link } from "./Link";
import { List } from "./List";
import { SocialIcons } from "./SocialIcons";
import React from "react";
import { colors, fonts } from "../theme";
import headshot from "../assets/img/nick.jpg";
import { hobbies } from "../data/hobbies";
import { internships } from "../data/internships";

export const Home = () => (
  <Wrapper>
    <HeroSection>
      <Headshot src={headshot} alt="Nicholas Tao" />
      <NameRow>
        <Wave>👋</Wave>
        <Name>Hey, I'm Nicholas</Name>
      </NameRow>
      <IconsWrapper>
        <SocialIcons lift />
      </IconsWrapper>
    </HeroSection>

    <Content>
      <Paragraph>
        I'm a <Highlight>software engineer</Highlight> based in{" "}
        <Highlight>New York City</Highlight>, currently working on some
        exciting stuff I can't talk about just yet. I recently graduated from
        the <Highlight>University of Waterloo</Highlight> with a degree in
        Computer Science, where I did{" "}
        <Highlight>six internships</Highlight> at some really cool tech
        companies, building everything from{" "}
        <Highlight>developer tools</Highlight> to{" "}
        <Highlight>crypto payment systems</Highlight>.
      </Paragraph>

      <List description="During my internships, I" items={internships} />

      <Paragraph>
        Outside of work, I like building things that scratch my own itch—from{" "}
        <Link href="https://devpost.com/software/omegu">Wave Chat</Link>,
        which helped university students meet people during online classes, to{" "}
        <Link href="https://devpost.com/software/applyai">ApplyAI</Link>,
        which automates job applications, to{" "}
        <Link href="https://devpost.com/software/lynz">Lynz</Link>, which
        tracked grocery store crowds during the pandemic. You can see more of
        my <Link href="/projects">projects here</Link>.
      </Paragraph>

      <Paragraph>
        I've been documenting my entire tech journey on{" "}
        <Link href="https://www.youtube.com/c/NicholasT/">
          my YouTube channel
        </Link>{" "}
        since 2020—from figuring out university to landing internships, to the
        real lessons learned as I navigate the industry, now with{" "}
        <Highlight>165k subscribers</Highlight> and{" "}
        <Highlight>21 million views</Highlight>.
      </Paragraph>

      <List description="In my free time, you can find me" items={hobbies} />

      <Paragraph>
        Always happy to meet new people and hear about what you're working on.{" "}
        <Link href="https://www.linkedin.com/in/nicholastao">
          Let's chat!
        </Link>
      </Paragraph>
    </Content>
  </Wrapper>
);

// -- Styled Components --

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const HeroSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin-bottom: 48px;
`;

const Headshot = styled.img`
  width: 120px;
  height: 120px;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 24px;
`;

const NameRow = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

const waveAnimation = keyframes`
  0% { transform: rotate(0deg) }
  10% { transform: rotate(14deg) }
  20% { transform: rotate(-8deg) }
  30% { transform: rotate(14deg) }
  40% { transform: rotate(-4deg) }
  50% { transform: rotate(10deg) }
  60% { transform: rotate(0deg) }
  100% { transform: rotate(0deg) }
`;

const Wave = styled.span`
  font-size: 32px;
  animation: ${waveAnimation} 2.5s;
  animation-iteration-count: 3;
  transform-origin: 70% 70%;
  display: inline-block;
`;

const Name = styled.h1`
  font-family: ${fonts.heading};
  font-size: 36px;
  font-weight: 600;
  margin: 0;
  color: ${colors.text};

  @media only screen and (max-width: 600px) {
    font-size: 28px;
  }
`;

const IconsWrapper = styled.div`
  margin-top: 16px;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

const Paragraph = styled.p`
  font-size: 17px;
  line-height: 1.75;
  color: ${colors.textSecondary};
  margin: 0;
`;

const Highlight = styled.span`
  color: ${colors.text};
  font-weight: 500;
`;

