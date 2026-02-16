import { IProject } from "../types";
import { Project } from "./Project";
import React from "react";
import { projects } from "../data/projects";
import styled from "styled-components";

export const Projects = () => {
  return (
    <Wrapper>
      <Back href="/">home</Back>
      <Title>👨‍💻Things I&apos;ve built</Title>
      <Subheading>
        All of these started because I ran into a problem that annoyed me enough to
        build something to fix it.
      </Subheading>
      {projects.map((project: IProject, i: number) => {
        return <Project project={project} key={i} />;
      })}
    </Wrapper>
  );
};
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
`;

const Title = styled.h3`
  text-align: center;
  font-family: "Mada", sans-serif;
  font-size: 32px;
  margin: 0;

  @media only screen and (max-width: 600px) {
    font-size: 28px;
  }
`;

const Back = styled.a`
  color: black;
  font-size: 18px;
  margin-bottom: 16px;
`;

const Subheading = styled.p`
  text-align: center;
  font-size: 18px;
  max-width: 600px;
  margin: 16px 0 32px 0;
  color: #555;
`;
