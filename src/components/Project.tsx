import styled from "styled-components";
import { IProject } from "../data/projects";

interface IProps {
  data: IProject;
}

export const Project = (props: IProps) => {
  const { data } = props;
  return (
    <Wrapper>
      <Image src={data.image} />
      <About>
        <Name>{data.name}</Name>
        <Pills>
          {data.tools.map((tool, i) => {
            return <Pill key={i}>{tool}</Pill>;
          })}
        </Pills>
        <Description>{data.description}</Description>
      </About>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  border: 1px solid black;
  border-radius: 5%;
  margin-top: 20px;
`;

const Image = styled.img`
  width: 400px;
  border-radius: 5% 0 0 5%;

  padding: 0.5px;
`;

const About = styled.div`
  display: flex;
  flex-direction: column;
  width: 350px;
  padding: 10px;
`;

const Pill = styled.p`
  background-color: #83c9af;
  margin: 0px 5px 0px 0px;
  padding: 3px;
  border-radius: 10%;
`;

const Pills = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  flex-wrap: nowrap;
  margin-top: 0;
`;

const Description = styled.p``;

const Name = styled.h2`
  margin: 0px 0px 5px 0px;
`;
