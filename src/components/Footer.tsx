import React from "react";
import styled from "styled-components";

export const Footer = () => {
  return (
    <Wrapper>
      <p>Made with ❤️ by Nicholas Tao &copy; 2022 </p>
      <LastUpdated>Last updated: Jan 2022</LastUpdated>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 80px;

  @media only screen and (max-width: 600px) {
    margin-top: 40px;
  }
`;

const LastUpdated = styled.p`
  font-size: 0.8rem;
  margin-top: 0;
`