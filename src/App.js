import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import styled from 'styled-components';
import Home from './Home'; // Change import statement to import Home instead of HomePage
import About from './About';
import Projects from './Projects';
import Skills from './Skills';
import Contact from './Contact';

// Styled-components example
const StyledHeader = styled.header`
  background-color: #333;
  color: white;
  padding: 10px;
  text-align: center;
`;

const StyledNav = styled.nav`
  ul {
    list-style-type: none;
    padding: 0;
    display: flex;
    justify-content: center;

    li {
      margin: 0 10px;
      font-size: 18px;

      a {
        text-decoration: none;
        color: white;
        transition: color 0.3s ease;

        &:hover {
          color: lightgrey;
        }
      }
    }
  }
`;

const App = () => {
  return (
    <Router>
      <div>
        <StyledHeader>
          <h1>My Portfolio</h1>
          <StyledNav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/projects">Projects</Link>
              </li>
              <li>
                <Link to="/skills">Skills</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </StyledNav>
        </StyledHeader>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
};



export default App;
