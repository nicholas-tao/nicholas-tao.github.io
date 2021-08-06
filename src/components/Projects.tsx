import styled from "styled-components";
import { Project } from "./Project";
import { projects } from "../data/projects";
import { IProject } from "../data/projects";

export const Projects = () => {
  return (
    <Wrapper>
      <h2>Some projects I've worked on</h2>
      {projects.map((project: IProject, i: number) => {
        return <Project data={project} key={i} />;
      })}
      {/*make a Project component, and a projects data file (array of objects), then we map through the array to display all the projects*/}
    </Wrapper>
  );
};
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
`;
