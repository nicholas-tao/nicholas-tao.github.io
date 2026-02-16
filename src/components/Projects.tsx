import { IProject } from "../types";
import { Header } from "./Header";
import { Project } from "./Project";
import React from "react";
import { projects } from "../data/projects";
import styled from "styled-components";
import { colors, fonts } from "../theme";

export const Projects = () => (
  <Wrapper>
    <Header />
    <Title>Things I&apos;ve built</Title>
    <Subheading>
      All of these started because I ran into a problem that annoyed me enough
      to build something to fix it.
    </Subheading>
    <ProjectList>
      {projects.map((project: IProject) => (
        <Project project={project} key={project.name} />
      ))}
    </ProjectList>
  </Wrapper>
);

// -- Styled Components --

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const Title = styled.h1`
  font-family: ${fonts.heading};
  font-size: 36px;
  font-weight: 600;
  margin: 0;
  letter-spacing: -0.5px;
  color: ${colors.text};

  @media only screen and (max-width: 600px) {
    font-size: 28px;
  }
`;

const Subheading = styled.p`
  font-size: 17px;
  line-height: 1.7;
  color: ${colors.textMuted};
  margin: 12px 0 0;
`;

const ProjectList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
  margin-top: 40px;
`;
