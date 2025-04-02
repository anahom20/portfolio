import React from "react";
import styled from "styled-components";
import { Link } from 'react-router-dom';


const Nav = styled.nav`
  position: sticky;
  top: 0;
  z-index: 10;
  background: white;
  padding: 1rem 12%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-family: 'Clash Grotesk', sans-serif;
  // box-shadow: 0 1px 8px rgba(0, 0, 0, 0.03);
`;

const Logo = styled.a`
  font-size: 1.4rem;
  font-weight: 700;
  color: #1f2937;
  text-decoration: none;
`;

const NavLinks = styled.div`
  display: flex;
  gap: 2rem;

  a {
    font-size: 0.95rem;
    font-weight: 500;
    color: #1f2937;
    text-decoration: none;
    transition: color 0.2s ease;

    &:hover {
      color: #4b5563;
    }
  }
`;

const Navbar = () => {
  return (
    <Nav>
      <Logo as={Link} to="/">M.</Logo>
      <NavLinks>
        <Link to="/about">About</Link>
        <Link to="/projects">Projects</Link>
        <a href="/Mohana_Resume.pdf" target="_blank" rel="noopener noreferrer">Resume</a>
      </NavLinks>
    </Nav>
  );
};

export default Navbar;
