import styled from "styled-components";

export const Footer = () => {
  return (
    <Wrapper>
      <p>Made with ❤️ by Nicholas Tao &copy; 2021 </p>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 80px;
`;
