import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 6rem 12%;
  min-height: 80vh;
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

const ExperienceContainer = styled.div`
  padding: 6rem 12%;
  background:rgb(232, 191, 174) ;
  min-height: 80vh;
  font-family: 'Inter', sans-serif;

  @media (max-width: 768px) {
    padding: 4rem 2rem;
  }
`;

const ExperienceHeading = styled.h1`
  font-size: 1.8rem;
  font-weight: 600;
  color: #1f2937;
  margin-bottom: 2rem;
  font-family: 'Clash Grotesk', sans-serif;
`;

const ExperienceGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 4rem;
`;

const ExperienceCard = styled.div`
  background: #f7f4ef;
  padding: 2rem;
  border: 1px solid #e5e7eb;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.03);
  text-align: center;
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  height: 100%;

  &:hover {
    transform: translateY(-5px);
    background: rgb(249, 251, 250);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.06);
  }

  img {
    width: 100%;
    max-width: 480px;
    margin: 0 auto 1.5rem;
    display: block;
    height: 160px;
    object-fit: contain;
  }

  h2 {
    font-size: 1.2rem;
    font-weight: 600;
    margin-bottom: 0.5rem;
    color: #1f2937;
  }

  h3 {
    font-size: 0.95rem;
    font-weight: 500;
    color: #6b7280;
    margin-bottom: 1rem;
  }

  p {
    font-size: 0.95rem;
    color: #4b5563;
    line-height: 1.6;
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
        <img src="/images/Mohana.JPG" alt="Portrait" />
      </ImageBlock>
    </Container>

    <ExperienceContainer>
      <ExperienceHeading>Work Experience</ExperienceHeading>
      <ExperienceGrid>
        <ExperienceCard>
          <h2>UIUX Designer Intern</h2>
          <h3>CPFB (Singapore) · Aug 2023 – Dec 2023</h3>
          <p>
            Collaborated with cross-functional teams to revamp internal government systems,
            conducted usability tests, and delivered high-fidelity prototypes improving user workflows.
          </p>
        </ExperienceCard>

        <ExperienceCard>
          <h2>AI/ML Research Intern</h2>
          <h3>TVS Motor (Bangalore) · May 2024 – Aug 2023</h3>
          <p>
            Worked on explainable AI techniques for healthcare data, analyzing model transparency
            and interpretability for clinical insights in medical AI.
          </p>
        </ExperienceCard>
        {/* Add more cards as needed */}
      </ExperienceGrid>
    </ExperienceContainer>
</>
    
  );
};

export default Home;
