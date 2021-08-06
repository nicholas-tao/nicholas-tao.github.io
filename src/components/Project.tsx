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
  @media only screen and (max-width: 600px) {
    flex-direction: column;
  }
  padding: 1px;
  border: 1px solid #3b403e;
  border-radius: 3%;
  margin-top: 20px;
`;

const Image = styled.img`
  border-radius: 3% 0 0 3%;
  @media only screen and (max-width: 600px) {
    width: 100%;
    border-radius: 5%;
  }
  @media only screen and (min-width: 600px) {
    width: 200px;
  }
  @media only screen and (min-width: 1024px) {
    width: 400px;
  }
`;

const About = styled.div`
  display: flex;
  flex-direction: column;

  @media only screen and (max-width: 600px) {
    width: 100%;
  }
  @media only screen and (min-width: 600px) {
    width: 200px;
  }
  @media only screen and (min-width: 1024px) {
    width: 350px;
  }
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
