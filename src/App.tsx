import "./fonts/fonts.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Footer } from "./components/Footer";
import { Home } from "./components/Home";
import { Projects } from "./components/Projects";
import React from "react";
import styled, { createGlobalStyle, keyframes } from "styled-components";
import { colors, fonts } from "./theme";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background-color: ${colors.background};
    color: ${colors.text};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  ::selection {
    background-color: ${colors.text};
    color: ${colors.background};
  }
`;

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(8px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const App = () => (
  <>
    <GlobalStyle />
    <Container>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </Container>
  </>
);

const Container = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 720px;
  margin: 0 auto;
  padding: 80px 40px 40px;
  font-family: ${fonts.body};
  min-height: 100vh;
  animation: ${fadeIn} 0.6s ease-out;

  @media only screen and (max-width: 600px) {
    padding: 48px 24px 24px;
  }
`;
