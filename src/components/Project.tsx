import { IProject } from "../types";
import React from "react";
import styled from "styled-components";
import { colors, fonts } from "../theme";

interface ProjectProps {
  project: IProject;
}

export const Project = ({ project }: ProjectProps) => (
  <CardLink href={project.link} target="_blank" rel="noreferrer">
    <Card>
      <ImageWrapper>
        <Image src={project.image} alt={project.name} loading="lazy" />
      </ImageWrapper>
      <Content>
        {project.award && <Award>{project.award}</Award>}
        <Name>{project.name}</Name>
        <Pills>
          {project.tools.map((tool) => (
            <Pill key={tool}>{tool}</Pill>
          ))}
        </Pills>
        <Description>{project.description}</Description>
      </Content>
    </Card>
  </CardLink>
);

// -- Styled Components --

const CardLink = styled.a`
  text-decoration: none;
  color: inherit;
`;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  background: ${colors.surface};
  border: 1px solid ${colors.border};
  border-radius: 12px;
  overflow: hidden;
  transition: transform 0.25s ease, box-shadow 0.25s ease;

  @media (hover: hover) {
    &:hover {
      transform: translateY(-3px);
      box-shadow: 0 8px 30px rgba(0, 0, 0, 0.06);
    }
  }
`;

const ImageWrapper = styled.div`
  width: 100%;
  overflow: hidden;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  display: block;
  transition: transform 0.3s ease;

  @media (hover: hover) {
    ${Card}:hover & {
      transform: scale(1.03);
    }
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  padding: 24px;
  flex: 1;
`;

const Name = styled.h3`
  font-family: ${fonts.heading};
  font-size: 22px;
  font-weight: 600;
  margin: 0 0 8px;
  color: ${colors.text};
`;

const Award = styled.span`
  font-size: 12px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 1px;
  color: ${colors.textFaint};
  margin-bottom: 6px;
`;

const Pills = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  margin-bottom: 12px;
`;

const Pill = styled.span`
  font-size: 12px;
  font-weight: 500;
  color: ${colors.textMuted};
  background-color: ${colors.pillBg};
  padding: 3px 10px;
  border-radius: 20px;
`;

const Description = styled.p`
  font-size: 15px;
  line-height: 1.6;
  color: ${colors.textMuted};
  margin: 0;
`;
