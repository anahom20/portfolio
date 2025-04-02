import React from "react";
import styled from "styled-components";
import { projects } from "../data";


const ProjectContainer = styled.div`
  padding: 6rem 12% 6rem;
  background: #ffffff;
  min-height: 100vh;
  font-family: 'Inter', sans-serif;

  @media (max-width: 768px) {
    padding: 4rem 2rem;
  }

`;

const Heading = styled.h1`
  font-size: 2.2rem;
  font-weight: 700;
  color: #1f2937;
  margin-bottom: 1.5rem;
  font-family: 'Clash Grotesk', sans-serif;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 4rem;
`;

const Card = styled.div`
  background: #ffffff;
  padding: 2rem;
  // border-radius: 12px;
  border: 1px solid #e5e7eb;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.03);
  text-align: center;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    background:rgb(249, 251, 250);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.06);
  }

  img {
    width: 100%;
    max-width: 280px;
    margin: 0 auto 1.5rem;
    display: block;
  }

  h2 {
    font-size: 1.2rem;
    font-weight: 600;
    margin-bottom: 0.75rem;
    color: #1f2937;
  }

  p {
    font-size: 0.95rem;
    color: #4b5563;
    line-height: 1.6;
    margin-bottom: 1rem;
  }

  a {
    font-size: 0.9rem;
    color: #a3b18a;
    font-weight: 600;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`;


const Projects = () => {
  return (
    <ProjectContainer>
      <Heading>Projects</Heading>
      <Grid>
        {projects.map((project, index) => (
          <Card key={index}>
            <img src={project.image} alt={project.title} />
            <h2>{project.title}</h2>
            <p>{project.description}</p>
            <a href={project.github} target="_blank" rel="noopener noreferrer">
              Link to GitHub
            </a>
          </Card>
        ))}
      </Grid>
    </ProjectContainer>
  );
};

export default Projects;
