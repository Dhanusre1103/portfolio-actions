import React from 'react';
import styled from 'styled-components';
 // Update with the path to your background image

const StyledContactSection = styled.section`
  padding: 20px;
  background-image: url('./images/desktop-wallpaper-portfolio-thumbnail.jpg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;

const ContactTitle = styled.h2`
  font-size: 24px;
  color: #fff;
  margin-bottom: 10px;
 font-family: 'Abroise Std Light', sans-serif;
`;

const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 400px;
  margin: 0 auto;
`;

const FormGroup = styled.div`
  margin-bottom: 15px;
`;

const Label = styled.label`
  font-size: 16px;
  color: WHITE;
  width: 150px; /* Adjust the width as needed */
  font-family: 'Abroise Std Light', sans-serif;
`;

const Input = styled.input`
  padding: 10px;
  font-size: 16px;
  border: 1px solid #fff;
  border-radius: 5px;
  transition: all 0.3s ease;
  width: 100%; /* Take up the remaining space */
  font-family: 'Abroise Std Light', sans-serif;

  &:hover {
    border-color: WHITE;
  }
`;


const TextArea = styled.textarea`
  padding: 10px;
  font-size: 16px;
  border: 1px solid #fff;
  border-radius: 5px;
  transition: all 0.3s ease;
  font-family: 'Abroise Std Light', sans-serif;

  &:hover {
    border-color: WHITE;
  }
`;

const SubmitButton = styled.button`
  padding: 10px 20px;
  font-size: 16px;
  color: #fff;
  background-color: #007bff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.3s ease;
  font-family: 'Abroise Std Light', sans-serif;

  &:hover {
    background-color: #0056b3;
  }
`;

const Contact = () => {
  return (
    <StyledContactSection id="Contact" className="contact--section">
      <div>
        <p className="sub--title">Get In Touch</p>
        <ContactTitle>Contact Me</ContactTitle>
        <p className="text-lg">
          FOR QUIRES
        </p>
      </div>
      <ContactForm className="contact--form--container">
        <FormGroup>
          <Label htmlFor="first-name">First Name</Label>
          <Input type="text" className="contact--input text-md" name="first-name" id="first-name" required />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="last-name">Last Name</Label>
          <Input type="text" className="contact--input text-md" name="last-name" id="last-name" required />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="email">Email</Label>
          <Input type="email" className="contact--input text-md" name="email" id="email" required />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="phone-number">Phone Number</Label>
          <Input type="tel" className="contact--input text-md" name="phone-number" id="phone-number" required />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="message">Message</Label>
          <TextArea className="contact--input text-md" id="message" rows="8" placeholder="Type your message..." />
        </FormGroup>
        <div>
          <SubmitButton type="submit" className="btn btn-primary contact--form--btn">Submit</SubmitButton>
        </div>
      </ContactForm>
    </StyledContactSection>
  );
};

export default Contact;
