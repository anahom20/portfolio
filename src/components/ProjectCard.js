import React from "react";
import styled from "styled-components";

const Card = styled.a`
  background: white;
  padding: 1.5rem;
  text-decoration: none;
  color: inherit;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.05);
  border-radius: 8px;
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

function ProjectCard({ title, description, image, link }) {
  return (
    <Card href={link} target="_blank" rel="noopener noreferrer">
      <img src={image} alt={title} />
      <h4>{title}</h4>
      <p>{description}</p>
    </Card>
  );
}

export default ProjectCard;
