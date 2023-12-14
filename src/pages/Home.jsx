// PATH: 'src/pages/Home.jsx'

import React from "react";
import { FaGithub, FaLinkedin, FaFilePdf } from "react-icons/fa";
import "../styles/Home.css"

function Home(props) {
    return (
    <div>
      <h1>Glad to e-meet you!</h1>
      <div className="social-buttons">
        <a href="https://github.com/DuaneWellington" target="_blank" rel="noopener noreferrer">
          <button className="social-button">
            <FaGithub className="icon" /> Github
          </button>
        </a>
        <a href="https://www.linkedin.com/in/duanewellington1/" target="_blank" rel="noopener noreferrer">
          <button className="social-button">
            <FaLinkedin className="icon" /> LinkedIn
          </button>
        </a>
        <a href="https://docs.google.com/document/d/1LYbvhCOQCIOWIqB2KqZXchunA28U8bgPB3Dm2O15GU8" target="_blank" rel="noopener noreferrer">
          <button className="social-button">
            <FaFilePdf className="icon" /> Resume
          </button>
        </a>
      </div>
      </div>
      );
  }
  
  export default Home;
  
  