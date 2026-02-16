import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import styled from "styled-components";
import { colors } from "../theme";
import { SOCIAL_LINKS } from "../data/socials";

interface SocialIconsProps {
  lift?: boolean;
}

export const SocialIcons = ({ lift = false }: SocialIconsProps) => (
  <Icons>
    {SOCIAL_LINKS.map(({ icon, href }) => (
      <a key={href} href={href} target="_blank" rel="noreferrer">
        <Icon icon={icon} $lift={lift} />
      </a>
    ))}
  </Icons>
);

// -- Styled Components --

const Icons = styled.div`
  display: flex;
  column-gap: 20px;
`;

const Icon = styled(FontAwesomeIcon)<{ $lift: boolean }>`
  font-size: 18px;
  color: ${colors.textFaint};
  transition: color 0.2s ease, transform 0.2s ease;

  @media (hover: hover) {
    &:hover {
      color: ${colors.text};
      ${({ $lift }) => $lift && "transform: translateY(-2px);"}
    }
  }
`;
