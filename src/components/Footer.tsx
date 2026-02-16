import React from "react";
import styled from "styled-components";
import { colors } from "../theme";

export const Footer = () => (
  <Wrapper>
    <FooterText>Made with ❤️ by Nicholas Tao &copy; 2026</FooterText>
    <LastUpdated>Last updated: February 2026</LastUpdated>
  </Wrapper>
);

// -- Styled Components --

const Wrapper = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: auto;
  padding-top: 80px;
  padding-bottom: 24px;

  @media only screen and (max-width: 600px) {
    padding-top: 48px;
  }
`;

const FooterText = styled.p`
  font-size: 14px;
  color: ${colors.textFaint};
  margin: 0;
`;

const LastUpdated = styled.p`
  font-size: 12px;
  color: ${colors.textFaintest};
  margin: 6px 0 0;
`;
