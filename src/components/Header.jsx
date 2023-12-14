// PATH: 'react-portfolio-dw/src/components/Header.jsx'

import { Link } from "react-router-dom";
import "./Header.css"

function Header() {

  return (
    <header>
      <h1 className="hello">HELLO!</h1>
      <h3 className="nameIs">My name is...</h3>
      <div className="duane text-container">
      <h1 className="angled-text">Duane Wellington</h1>
      </div>
      <h3 className="bar">_</h3>
      <nav className="navStyle">
        <Link to="/">
          <div>HOME</div>
        </Link>
        <Link to="/about">
          <div>ABOUT</div>
        </Link>
        <Link to="/skills">
          <div>SKILLS</div>
        </Link>
        <Link to="/projects">
          <div>PROJECTS</div>
        </Link>
      </nav>
    </header>
  );
}

export default Header;