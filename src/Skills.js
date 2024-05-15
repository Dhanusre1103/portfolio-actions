import React from 'react';
import styled from 'styled-components';

const StyledSkillsSection = styled.section`
  padding: 20px;
  background-image: url('./images/desktop-wallpaper-portfolio-thumbnail.jpg'); /* Replace with your image path */
  background-size: cover;
  background-position: center;
`;

const SkillsContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 40px;
  background-color: rgba(255, 255, 255, 0.8); /* Semi-transparent white background */
  border-radius: 10px;
`;

const SkillsHeading = styled.h2`
  font-size: 36px;
  color: #333; /* Dark text color */
  font-family: 'YourFont', sans-serif; /* Replace 'YourFont' with your desired font */
`;

const SkillList = styled.ul`
  font-size: 28px;
  list-style: none;
  padding: 0;
`;

const SkillItem = styled.li`
  font-size: 18px;
  color: #333; /* Dark text color */
  margin-bottom: 10px;
`;

const Skills = () => {
  return (
    <StyledSkillsSection id="skills">
      <SkillsContainer>
        <SkillsHeading>My Skills</SkillsHeading>
        <SkillList>
          <SkillItem>COMMUNICATION SKILL</SkillItem>
          <SkillItem>JAVA</SkillItem>
          <SkillItem>PYTHON (BASICS)</SkillItem>
          <SkillItem>DEVOPS</SkillItem>
          {/* Add more skills as needed */}
        </SkillList>
      </SkillsContainer>
    </StyledSkillsSection>
  );
};

export default Skills;
