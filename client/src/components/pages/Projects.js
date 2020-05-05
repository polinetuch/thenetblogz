import React from 'react';
import Photos from './projects.json';

class Projects extends React.Component {

    render() {

        return (
            <>
            <div className="container">
                <h1>My Works</h1>
                <p>These are the projects that I worked on
                    during my time at Coding Bootcamp program
                    with Monash University
                </p>
                <div className="row">
                    {Photos.map((postdetail, index) => {
                        return <div className="col-sm-3" key={index}>
                            <strong><p>{postdetail.name}</p></strong>
                            <img src={postdetail.image} alt={postdetail.name}/>
                            <p>View source: {postdetail.source}</p>
                            <p>Try it live: {postdetail.url}</p>
                            </div>
                    })}
                </div>
            </div>
            </>
        )
    }
}


export default Projects;