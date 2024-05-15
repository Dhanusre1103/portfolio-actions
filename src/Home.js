import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';
import About from './About';

// Keyframe animation for typing effect
const typing = keyframes`
  from { width: 0 }
  to { width: 100% }
`;

// Keyframe animation for blinking cursor
const blinkCaret = keyframes`
  from, to { border-color: transparent }
  50% { border-color: orange; }
`;

// Styled-components example
const StyledHomePage = styled.div`
  padding: 20px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center; /* Center vertically */
  align-items: flex-start; /* Align items to the left */
  text-align: left; /* Align text to the left */
  background-image: url('./images/desktop-wallpaper-portfolio-thumbnail.jpg'); /* Relative path to the image */
  background-size: cover;
  background-position: center;
`;

const TypewriterHeading = styled.h1`
  overflow: hidden;
  border-right: .15em solid orange;
  white-space: nowrap;
  margin: 0;
  letter-spacing: .15em;
  font-size: 48px; /* Increased font size */
  font-family: 'Helvetica', sans-serif; /* Use Helvetica font */
  animation: ${typing} 3.5s steps(40, end), ${blinkCaret} 0.75s step-end infinite;
  color: #fff; /* White font color */
`;

const TypewriterParagraph = styled.p`
  overflow: hidden;
  white-space: nowrap;
  margin: 0;
  letter-spacing: .15em;
  font-size: 36px; /* Increased font size */
  font-family: 'Helvetica', sans-serif; /* Use Helvetica font */
  animation: ${typing} 3.5s steps(40, end), ${blinkCaret} 0.75s step-end infinite;
  color: #fff; /* White font color */
`;

const Button = styled(Link)`
  margin-top: 20px;
  padding: 10px 20px;
  font-size: 24px;
  background-color: #ff4500;
  border: none;
  border-radius: 5px;
  color: #fff;
  cursor: pointer;
  text-decoration: none; /* Remove default anchor underline */
`;

const Home = () => {
  return (
    <StyledHomePage>
      <TypewriterHeading>HI, I AM DHANUSREE</TypewriterHeading>
      <TypewriterParagraph>I AM A SOFTWARE DEVELOPER</TypewriterParagraph>
      <Button to="/about">About Me</Button>
      <Routes>
        <Route path="/about" element={<About />} />
      </Routes>
    </StyledHomePage>
  );
};

export default Home;
