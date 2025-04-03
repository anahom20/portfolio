import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 6rem 12%;
  min-height: 90vh;
  background: linear-gradient(to bottom, #f7f4ef 70%,rgb(232, 191, 174) 30%);

  @media (max-width: 768px) {
    flex-direction: column-reverse;
    padding: 3rem 2rem;
    text-align: center;
  }
`;

const TextBlock = styled.div`
  flex: 1.1;
  max-width: 500px;
  padding-left: 2rem;

  @media (max-width: 768px) {
    padding-left: 0;
  }

  h1 {
    font-size: 2.4rem;
    font-weight: 700;
    color: #1f2937;
    margin-bottom: 0.5rem;
    font-family: 'Clash Grotesk', 'Space Grotesk', sans-serif;
  }

  h2 {
    font-size: 1.1rem;
    font-weight: 600;
    color: #4b5563;
    margin-bottom: 1.2rem;
    font-family: 'Inter', sans-serif;
  }

  p {
    font-size: 1rem;
    color: #6b7280;
    line-height: 1.75;
    font-family: 'Inter', sans-serif;
  }
`;


const ImageBlock = styled.div`
  flex: 0.9;
  display: flex;
  justify-content: center;

  img {
    width: 220px;
    height: auto;
    aspect-ratio: 3 / 4;
    object-fit: cover;
    border: 2px solid #e0e7ff;
    background: #fefeff;
    transform: scale(1.05); /* <-- This is the zoom */
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.04);

    @media (max-width: 768px) {
      width: 180px;
      aspect-ratio: 3 / 4;
      margin-bottom: 1.5rem;
    }
  }
`;

const ProjectsSection = styled.section`
  padding: 6rem 12%;
  background: #e8bfae;

  margin-top: -4rem;
  
  h3 {
    font-size: 1.8rem;
    font-weight: 700;
    margin-bottom: 2.5rem;
    color: #1f2937;
    font-family: 'Clash Grotesk', sans-serif;
  }
    
`;


const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 2rem;
`;


const ProjectCard = styled.a`
  background: white;
  // border-radius: 12px;
  padding: 1.5rem;
  text-decoration: none;
  color: inherit;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.05);
  transition: transform 0.2s ease;

  &:hover {
    transform: translateY(-5px);
  }

  img {
    width: 100%;
    border-radius: 8px;
    margin-bottom: 1rem;
    object-fit: cover;
    height: 160px;
    background: #f3f4f6;
  }

  h4 {
    font-size: 1.2rem;
    font-weight: 600;
    margin-bottom: 0.5rem;
  }

  p {
    font-size: 0.95rem;
    color: #4b5563;
  }
`;


const Home = () => {
  return (
    <>
    <Container>
      <TextBlock>
        <h1 className="typewriter">Hi, I’m Mohana.</h1>
        <h2>Computer Science and Design, AI minor</h2>
        <p>
        A design thinker crafting user-centric experiences and AI-powered solutions to meaningfully serve people.
        </p>
      </TextBlock>

      <ImageBlock>
        <img src="/images/profile.JPG" alt="Portrait" />
      </ImageBlock>
    </Container>

    {/* <ProjectsSection>
    <h3>Projects</h3>
    <ProjectsGrid>
      <ProjectCard href="https://your-project-link.com" target="_blank" rel="noopener noreferrer">
        <img src="/project1-thumbnail.jpg" alt="Project 1" />
        <h4>Lumify.</h4>
        <p>Digital solution to reconnect HDB neighbors and revive the Kampung spirit</p>
      </ProjectCard>

      <ProjectCard href="https://your-project-link.com" target="_blank" rel="noopener noreferrer">
        <img src="/project2-thumbnail.jpg" alt="Project 2" />
        <h4>STEVFNS-P</h4>
        <p>Web Application for energy systems optimisation</p>
      </ProjectCard>
    </ProjectsGrid>
    </ProjectsSection> */}
</>
    
  );
};

export default Home;
