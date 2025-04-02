import React from "react";
import styled from "styled-components";

const AboutContainer = styled.div`
  padding: 6rem 12% 6rem;
  min-height: 85vh;
  background-color: #ffffff;
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
  background-color: #a3b18a; 
  color: white;
  font-size: 0.95rem;
  font-weight: 600;
  text-decoration: none;
  border-radius: 8px;
  transition: background 0.3s;

  &:hover {
    background-color: #8f9f78;
  }
`;

const About = () => {
  return (
    <AboutContainer>
      <Heading>About Me</Heading>
      <Paragraph>
        I’m a final-year Computer Science student with an AI minor, specializing in Data Analytics and Fintech. 
        I love using technology to simplify complex problems — especially through beautiful, intuitive interfaces.
        My interests sit at the intersection of AI, UI/UX, and frontend engineering.
      </Paragraph>

      <ButtonGroup>
        <Button href="https://www.linkedin.com/in/mohana-selvakumar/" target="_blank" rel="noopener noreferrer">LinkedIn</Button>
        <Button href="https://github.com/anahom20" target="_blank" rel="noopener noreferrer">GitHub</Button>
      </ButtonGroup>
    </AboutContainer>
  );
};

export default About;
