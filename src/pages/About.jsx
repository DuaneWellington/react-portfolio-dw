// PATH: 'react-portfolio-dw/src/pages/About.jsx'

import { useState, useEffect } from "react";
import Header from "../components/Header";


function About() {
  // create state to hold about data
  const [about, setAbout] = useState(null);

  // create function to make api call
  const getAboutData = async () => {
    // make api call and get response
    const response = await fetch("./about.json");

    // turn response into javascript object
    const data = await response.json();

    // set the about state to the data
    setAbout(data);
  };

  // make an initial call for the data inside a useEffect, so it only happens once on component load
  useEffect(() => {
    getAboutData();
  }, []);

  // define a function that will return the JSX needed once we get the data
  const loaded = () => (
    <div className="aboutInfo">
      <div className="aboutMe">
        <h1>About Me</h1>
      </div>
      <div className="name">
        <h2>{about.name}</h2>
      </div>
      <div className="email">
        <h3>{about.email}</h3>
      </div>
      <div className="bio">
        <p>{about.bio1}</p>
        <p>{about.bio2}</p>
        <p>{about.bio3}</p>
        <p>{about.bio4}</p>
      </div>
    </div>
  );

  // if data arrives return the result of loaded, if not, an h1 that says loading
  return about ? loaded() : <h1>Loading...</h1>;
}

export default About;
