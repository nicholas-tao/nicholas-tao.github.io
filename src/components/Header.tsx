import React from "react";
import styled from "styled-components";
import { SocialIcons } from "./SocialIcons";
import { colors, fonts } from "../theme";

export const Header = () => (
  <Nav>
    <LogoLink href="/">NT</LogoLink>
    <SocialIcons />
  </Nav>
);

// -- Styled Components --

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-bottom: 48px;
`;

const LogoLink = styled.a`
  font-family: ${fonts.heading};
  font-size: 24px;
  font-weight: 600;
  color: ${colors.text};
  text-decoration: none;
  letter-spacing: -0.5px;
  transition: opacity 0.2s ease;

  @media (hover: hover) {
    &:hover {
      opacity: 0.6;
    }
  }
`;
