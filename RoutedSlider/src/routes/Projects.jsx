import React, { useState } from 'react';
import "../styles/Projects.css";
import { projects } from '../ProjectsConfig.json';


const Projects = () => {
    let [idx, setIdx] = useState(0);
    // This is the Projects component. It will display the projects.
    // Read ProjectsConfig.json to get the projects. and split them up into lists of 2
    
    let projectSplit = [];
    for (let i = 0; i < projects.length; i += 2) {
        projectSplit.push(projects.slice(i, i + 2));
    }


    const goUp = () => {
        // increase the index, restart at 0 if it goes above the length of the projectSplit
        idx +=1;
        if (idx >= projectSplit.length) {
            idx = 0;
        }
        setIdx(idx);
        console.log('up', idx);
    };

    const goDown = () => {
        // decrease the index, restart at the end if it goes below 0
        idx -=  1;
        if (idx < 0) {
            idx = projectSplit.length - 1;
        }
        setIdx(idx);
        console.log('down', idx);
    };

    return (
        <div className="full-page" style={{ backgroundColor: 'coral' }}>  
            <h1>Projects</h1>
            <button onClick={goUp} className="up-arrow">↑</button>
            <div className="project-display">
                {projectSplit[idx].map(project => (
                    <div key={project.title}>
                        <h3>{project.title}</h3>
                        <a href={project.link} target="_blank"  >
                            <img src={project.image} alt={project.title} />
                        </a>
                        <p>{project.description}</p>
                    </div>
                ))}
            </div>
            <button onClick={goDown} className="down-arrow">↓</button>
        </div>
    );
};

export default Projects;