import React from "react";
import styled from "styled-components";

const AboutContainer = styled.div`
  padding: 6rem 12% 6rem;
  min-height: 85vh;
  background-color: #f7f4ef;
  font-family: 'Inter', sans-serif;
  @media (max-width: 768px) {
    padding: 3rem 2rem;
    text-align: center;
  }
`;

const Heading = styled.h1`
  font-size: 2.2rem;
  font-weight: 700;
  color: #1f2937;
  margin-bottom: 1.5rem;
  font-family: 'Clash Grotesk', sans-serif;
`;

const Paragraph = styled.p`
  font-size: 1rem;
  line-height: 1.8;
  color: #334155;
  max-width: 700px;
  margin-bottom: 2.5rem;
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 1.2rem;

  @media (max-width: 768px) {
    justify-content: center;
    flex-wrap: wrap;
  }
`;

const Button = styled.a`
  padding: 0.75rem 1.5rem;
  background-color: #e6b8a2; 
  color: white;
  font-size: 0.95rem;
  font-weight: 600;
  text-decoration: none;
  border-radius: 8px;
  transition: background 0.3s;

  &:hover {
    background-color:rgb(229, 145, 106);
  }
`;

const About = () => {
  return (
    <AboutContainer>
      <Heading>Hi.</Heading>
      <Paragraph>
      I'm a final-year Computer Science student with a minor in AI, focused on Data Analytics and Fintech. 
      I’m passionate about creating AI-driven solutions grounded in user-centered design — building impactful tech 
      that’s both intelligent and intuitive, designed to serve people through better experiences.
      </Paragraph>

      <ButtonGroup>
        <Button href="https://www.linkedin.com/in/mohana-selvakumar/" target="_blank" rel="noopener noreferrer">LinkedIn</Button>
        <Button href="https://github.com/anahom20" target="_blank" rel="noopener noreferrer">GitHub</Button>
      </ButtonGroup>
    </AboutContainer>
  );
};

export default About;
