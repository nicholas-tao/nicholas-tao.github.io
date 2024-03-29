import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import initials from "../assets/img/initials.png";
import styled from "styled-components";

export const Header = () => {
  return (
    <Wrapper>
      <a href="/">
        <Initials src={initials} alt="NT" />
      </a>
      <Icons>
        <a href="https://www.github.com/nicholas-tao">
          <Icon icon={faGithub} size="lg" color="black" />
        </a>
        <a href="https://www.linkedin.com/in/nicholastao">
          <Icon icon={faLinkedinIn} size="lg" color="black" />
        </a>
      </Icons>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
`;

const Icons = styled.div`
  display: flex;
  column-gap: 20px;
  justify-content: space-between;
`;

const Icon = styled(FontAwesomeIcon)`
  :hover {
    color: #808080;
  }
`;

const Initials = styled.img`
  height: 40px;

  @media only screen and (max-width: 600px) {
    height: 30px;
  }
  transition: transform 250ms;
  :hover {
    transform: translateY(-6px);
  }
`;
