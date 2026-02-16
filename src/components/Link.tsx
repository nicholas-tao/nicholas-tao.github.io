import React from "react";
import styled from "styled-components";
import { colors } from "../theme";

interface LinkProps {
  href: string;
  children: React.ReactNode;
}

export const Link = ({ href, children }: LinkProps) => (
  <StyledLink
    href={href}
    target={href.startsWith("/") ? "_self" : "_blank"}
    rel="noreferrer"
  >
    {children}
  </StyledLink>
);

const StyledLink = styled.a`
  font-weight: 500;
  text-decoration: none;
  color: ${colors.text};
  border-bottom: 1.5px solid ${colors.borderLight};
  padding-bottom: 1px;
  transition: border-color 0.2s ease;

  @media (hover: hover) {
    &:hover {
      border-color: ${colors.text};
    }
  }
`;
