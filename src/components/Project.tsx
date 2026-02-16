import { IProject } from "../types";
import React from "react";
import styled from "styled-components";

interface IProps {
  project: IProject;
}

export const Project = (props: IProps) => {
  const { project } = props;
  return (
    <a
      href={project.link}
      target="_blank"
      rel="noreferrer"
      style={{ textDecoration: "none", color: "black" }}
    >
      <Wrapper>
        <Image src={project.image} />
        <About>
          {project.award ? <Award>{project.award}</Award> : null}
          <Name>{project.name}</Name>
          <Pills>
            {project.tools.map((tool, i) => {
              return <Pill key={i}>{tool}</Pill>;
            })}
          </Pills>
          <Description>{project.description}</Description>
        </About>
      </Wrapper>
    </a>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  @media only screen and (max-width: 600px) {
    flex-direction: column;
    align-items: stretch;
  }
  padding: 1px;
  border: 1px solid #3b403e;
  border-radius: 3%;
  margin-top: 20px;
  transition: transform 250ms;
  :hover {
    transform: translateY(-4px);
  }
`;

const Image = styled.img`
  border-radius: 3% 0 0 3%;
  object-fit: cover;
  object-position: center;

  @media only screen and (max-width: 600px) {
    width: 100%;
    height: 200px;
    border-radius: 5% 5% 0 0;
  }
  @media only screen and (min-width: 600px) {
    width: 300px;
    height: 167px;
  }
  @media only screen and (min-width: 1024px) {
    width: 400px;
    height: 222px;
  }
`;

const About = styled.div`
  display: flex;
  flex-direction: column;

  @media only screen and (min-width: 600px) {
    width: 250px;
  }
  @media only screen and (min-width: 1024px) {
    width: 350px;
  }
  padding: 15px 15px 15px 25px;
`;

const Pill = styled.p`
  background-color: #cae8dd;
  margin: 0px 5px 0px 0px;
  padding: 1px 5px;
  border-radius: 15%;
`;

const Pills = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  flex-wrap: nowrap;
  margin-top: 0;
`;

const Description = styled.p`
  font-size: 18px;
`;

const Name = styled.h2`
  margin: 0px 0px 5px 0px;
`;

const Award = styled.h4`
  text-transform: uppercase;
  margin: 0;
  color: #a6a6a6;
  font-weight: 600;
`;
