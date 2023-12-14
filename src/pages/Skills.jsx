// PATH: 'src/pages/Skills.jsx'

// import React, {useState, useEffect } from "react";
// import useScrollToTop from "../../utils/hooks/useScrollToTop";
// import "../styles/Skills.css"

// function Skills() {
//     // useScrollToTop();
//    const [skills, setSkills] = useState([]);

//    useEffect(() => {
//     const fetchSkills = async () => {
//         try {
//             const response = await fetch("/skills.json");
//             const data = await response.json();
//             setSkills(data);
//         } catch (error) {
//             console.error("Error fetching Skills data: ", error);
//         }
//     };
//     fetchSkills();
//    }, []);

//     return (
//         <div className="skills-container">
//             {skills.map((skill) => ( 
//             <SkillCard key={skill.id} {...skill} />
//             ))}
//         </div>
//     );
// }

// const SkillCard = ({ name, description, image }) => (
//     <div className="skill-card">
//         <img src={image} alt={name} className="skill-image" />
//         <h3>{name}</h3>
//         <p>{description}</p>
//     </div>
// );

// export default Skills;





{/* <img class="w-20 mx-auto pb-2" src="/static/media/html.2ba4fabc69a89a8f71e6.png" alt="HTML icon"></img>
<p>HTML</p>


<img class="w-20 mx-auto pb-2" src="/static/media/css.69a82c2d9e45c933a9cb.png" alt="CSS icon">
<p>CSS</p>


<img class="w-20 mx-auto pb-2" src="/static/media/javascript.1ccd6ef9bb1f9c84ef00.png" alt="JavaScript icon"></img>
<p>JavaScript</p>


<img class="w-20 mx-auto pb-2" src="/static/media/react.0cf951a69d8e58f83f9d.png" alt="ReactImg icon"></img>
<p>React</p>


<div class="shadow-lg rounded-md shadow-[#160a0b] dark:hover:bg-red-900 hover:scale-105 duration-500 p-2"><img class="w-20 mx-auto pb-2" src="data:image/png;base64,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" alt="Express icon"><p>Express</p></div>


<img class="w-20 mx-auto pb-2" src="/static/media/mongo.2a1528ddc31d4ce8518d.png" alt="Mongo icon"></img>
<p>Mongo</p>


<img class="w-20 mx-auto pb-2" src="/static/media/postgres.578077eca13c03fd4527.png" alt="Postgres icon"></img>
<p>Postgres</p>


<img class="w-20 mx-auto pb-2" src="/static/media/python.a2caf4d3e9d437492f4e.png" alt="Python icon"></img>
<p>Python</p> */}