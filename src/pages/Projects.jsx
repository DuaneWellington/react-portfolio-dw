// PATH: 'src/pages/Projects.jsx'

import { FaGithub, FaServer } from "react-icons/fa";
import { useState, useEffect } from "react";
import Footer from "../components/Footer";

function Projects(props) {
  // create state to hold projects
  const [projects, setProjects] = useState(null);

  //create function to make api call
  const getProjectsData = async () => {
    //make api call and get response
    const response = await fetch("./projects.json");

    // turn response into javascript object
    const data = await response.json();

    // set the projects state to the data
    setProjects(data);
  };

  // make an initial call for the data inside a useEffect, so it only happens once on component load
  useEffect(() => {
    getProjectsData();
  }, []);

  // -------------  test code for project card styling and functionality ---------

  // const renderProjectCards = () => {
  //   return projects.map((project) => (
  //     <Link key={project.id} to={`projects/${project.id}`} className="project-card-link">
  //       <div className="project-card">
  //         <img src={project.image} alt={project.name} className="project-image" />
  //         <div className="project-details">
  //           <h3>{project.name}</h3>
  //           <p>{project.description}</p>
  //           <div className="buttons">
  //             <a href={project.live} target="_blank" rel="noopener noreferrer">
  //               <button className="live-button">
  //                 <FaServer className="icon" /> Live Link
  //               </button>
  //             </a>
  //             <a href={project.git} target="_blank" rel="noopener noreferrer">
  //             <button className="github-button">
  //                 <FaGithub className="icon" /> Github
  //               </button>
  //             </a>
  //           </div>
  //         </div>
  //       </div>
  //     </Link>
  //   ));
  // };
  // ------------------------------------------------------------------------

  // define a function that will return the JSX needed once we get the data
  const loaded = () => {
    return projects.map((project) => (
      <div className="project-container">
        <div className="project-card">
          <div className="project.details">
            <h1 className="projectTitle">{project.name}</h1>
            <img src={project.image} className="imgBox" alt={project.name} />
            <h4 className="projectDesc">{project.description}</h4>
            <div className="buttons">
              <a href={project.git} target="_blank" rel="noopener noreferrer">
                <button className="gitBtn">
                  <FaGithub className="icon" /> Github
                </button>
              </a>
              <a href={project.live} target="_blank" rel="noopener noreferrer">
                <button className="liveBtn">
                  <FaServer className="icon" /> Live Site
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    ));
  };

  return projects ? loaded() : <h1>Loading...</h1>;
  // return projects ? <div className="project-container">{renderProjectCards()}</div> : <h1>Loading...</h1>;
}

export default Projects;
