import React from "react";
import styled from "styled-components";
import { colors, fonts } from "../theme";

export const NotFound = () => (
  <Wrapper>
    <Code>404</Code>
    <Message>You seem lost. This is awkward.</Message>
    <HomeLink href="/">← let&apos;s pretend this never happened</HomeLink>
  </Wrapper>
);

// -- Styled Components --

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  flex: 1;
  padding: 80px 0;
`;

const Code = styled.h1`
  font-family: ${fonts.heading};
  font-size: 72px;
  font-weight: 600;
  color: ${colors.text};
  margin: 0;
  letter-spacing: -2px;
`;

const Message = styled.p`
  font-size: 17px;
  color: ${colors.textMuted};
  margin: 8px 0 32px;
`;

const HomeLink = styled.a`
  font-size: 15px;
  color: ${colors.textFaint};
  text-decoration: none;
  transition: color 0.2s ease;

  @media (hover: hover) {
    &:hover {
      color: ${colors.text};
    }
  }
`;
