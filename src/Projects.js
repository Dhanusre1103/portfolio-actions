import React from 'react';
import styled from 'styled-components';

// Define styled components for Projects page
const StyledProjectsPage = styled.div`
  padding: 20px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  text-align: left;
  background-image: url('./images/desktop-wallpaper-portfolio-thumbnail.jpg');
  background-size: cover;
  background-position: center;
`;

const Heading = styled.h1`
  font-size: 48px;
  font-family: 'Helvetica', sans-serif;
  color: #ff4500; /* White font color */
`;

const ProjectList = styled.ul`
  list-style-type: none;
  padding: 0;
`;

const ProjectItem = styled.li`
  font-family: 'Helvetica', sans-serif;
  color: LAVENDER; /* White font color */
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  transition: transform 0.3s ease; /* Add transition for smooth effect */
  cursor: pointer;

  &:hover {
    transform: scale(1.05); /* Increase size on hover */
    color: DARKGREY; /* Change color on hover */
  }

  &:last-child {
    margin-bottom: 0;
  }
`;

const Description = styled.textarea`
  flex: 8;
  width: 400%; /* Set width to 100% */
  padding: 20px; /* Adjust padding */
  font-size: 24px; /* Adjust font size */
  border: 1px solid #fff;
  border-radius: 5px;
  background-color: transparent;
  color: #fff;
  min-width: 800px; /* Set minimum width */
`;

const ProjectImage = styled.img`
  width: 300px; /* Increase width of the image */
  height: auto;
  margin-left: 20px; /* Adjust margin to create space between image and description */
`;

// Define the Projects functional component
const Projects = () => {
  return (
    <StyledProjectsPage>
      <Heading>My Project</Heading>
      <ProjectList>
        <ProjectItem>
          <h2>PLANT DISEASE DETECTION</h2>
          <Description
            readOnly
            rows={8} // Adjust the number of rows as needed
            value="DESCRIPTION: The project focuses on leveraging machine learning, particularly convolutional neural networks (CNNs), to develop an efficient plant disease detection model. By meticulously preprocessing a diverse dataset of images depicting healthy and diseased plants, the model aims to accurately identify various types of plant diseases. Through rigorous training and evaluation, including techniques like cross-validation, the system aims to achieve high performance metrics such as accuracy, precision, and recall. Ultimately, the goal is to deploy this model into an accessible application or web interface, enabling farmers to swiftly diagnose and address plant diseases, thus safeguarding agricultural yields and promoting sustainable farming practices."
          />
          <ProjectImage src="/images/conference2.jpg" alt="Project Demo Image" />
        </ProjectItem>
        {/* Add more ProjectItem components as needed */}
      </ProjectList>
    </StyledProjectsPage>
  );
};

export default Projects;
