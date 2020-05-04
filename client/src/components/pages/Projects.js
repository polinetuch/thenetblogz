import React from 'react';
import projects from './projects.json';

class Projects extends React.Component {

    render() {
        return (
            <>
            <div className="container">
                <h1>My Works</h1>
                <p>These are the projects that I worked on
                    during my time at Coding Bootcamp program
                    with Monash University
                {/* <img src={projects.crystal.image}/> */}
                </p>

                {/* <div className="projects">
                    <img src={projects.crystal} alt={projects.name}/>
                </div> */}
                   
            </div>
            </>
        )
    }
}


export default Projects;