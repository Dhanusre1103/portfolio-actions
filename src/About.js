import React from 'react';
import styled, { keyframes } from 'styled-components';

// Keyframe animation for glowing effect
const glow = keyframes`
  0% { box-shadow: 0 0 10px 0px lavender; }
  50% { box-shadow: 0 0 20px 10px lavender; }
  100% { box-shadow: 0 0 10px 0px lavender; }
`;

const StyledAboutPage = styled.div`
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
  position: relative; /* Ensure positioning of buttons */
`;

const Heading = styled.h1`
  font-size: 48px;
  font-family: 'Helvetica', sans-serif;
  color: #ff4500; /* White font color */
`;




const blinkCaret = keyframes`
  from, to { border-color: transparent }
  50% { border-color: orange; }
`;
 

const Paragraph = styled.p`
flex: 3;
width: 25%; /* Set width to 100% */
padding: 20px; /* Adjust padding */
font-size: 24px; /* Adjust font size */
border: 1px solid #fff;
border-radius: 5px;
background-color: transparent;
color: #fff;
min-width: 750px; /* Set minimum width */
`;

const ShineButton = styled.a`
  position: absolute;
  bottom: 20px; /* Adjust as needed */
  right: 20px; /* Adjust as needed */
  padding: 10px 20px;
  font-size: 20px;
  color: black; /* Black font color */
  background-color: lavender; /* Lavender background color */
  border: none;
  border-radius: 5px;
  cursor: pointer;
  text-decoration: none;
  animation: ${glow} 2s ease-in-out infinite alternate; /* Apply glow animation */
`;

const GitHubButton = styled.a`
  position: absolute;
  bottom: 20px; /* Adjust as needed */
  right: 150px; /* Adjust as needed */
  padding: 10px 20px;
  font-size: 20px;
  color: black; /* Black font color */
  background-color: lavender; /* Lavender background color */
  border: none;
  border-radius: 5px;
  cursor: pointer;
  text-decoration: none;
  animation: ${glow} 2s ease-in-out infinite alternate; /* Apply glow animation */
`;

const LinkedInButton = styled.a`
  position: absolute;
  bottom: 20px; /* Adjust as needed */
  right: 280px; /* Adjust as needed */
  padding: 10px 20px;
  font-size: 20px;
  color: black; /* Black font color */
  background-color: lavender; /* Lavender background color */
  border: none;
  border-radius: 5px;
  cursor: pointer;
  text-decoration: none;
  animation: ${glow} 2s ease-in-out infinite alternate; /* Apply glow animation */
`;

const About = () => {
  return (
    <StyledAboutPage>
      <Heading>About Me</Heading>
      <Paragraph>
        Hi there! I'm DHANUSREE S, Currently persuing in B.TECH.IT and eager to dive into the IT world.  I'm passionate about technology and ready to learn. I bring fresh perspectives, adaptability, and a hunger to contribute to innovative projects. Let's connect and explore opportunities together!
      </Paragraph>
      <ShineButton href="/projects">Projects</ShineButton>
      <GitHubButton href="https://github.com/Dhanusre" target="_blank">GitHub</GitHubButton>
      <LinkedInButton href="https://www.linkedin.com/in/dhanusree-s-kit-b52a23265" target="_blank">LinkedIn</LinkedInButton>
    </StyledAboutPage>
  );
};

export default About;
