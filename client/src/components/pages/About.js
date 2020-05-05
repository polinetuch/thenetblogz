import React from 'react';

class About extends React.Component{
    render() {
        return (
            <>
            <section>
            <article>
            <div className="card w-50">
                <div className="card-body">
                    <h5 className="card-title">Who am I?</h5>
                    <p>My name is Polinet</p>
                    <p className="card-text">
                        I am a junior full-stack web developer based
                        in Melbourne. 
                        I enjoy problem solving and currently interested
                        in learning more about React and making things
                        pretty and easy to use. 
                    </p>
                </div>
            </div>
            </article>
            </section>

            <section id='about'>
                <div className='wrapper'>
                    <article>
                        <div className='title'>
                            <h3>Who am I?</h3>
                            <p className='separator'></p>
                        </div>
                        <div className='desc full'>
                            <h4 className='subtitle'>My name is Polinet</h4>
                            <p>I am a full stack engineer</p>
                            <p>I code</p>
                        </div>
                    </article>
                </div>
            </section>
            {/* <div className="container">
            <div className="row about">
                <h1>Who am I?</h1>
                <hr></hr>
                <strong>
                    <h4>
                        My name is Polinet 
                    </h4>
                </strong>
            </div>
            <div className="row about-text">
                <p className="aboutme">
                    I am a junior full-stack web developer based
                    in Melbourne. 
                    I enjoy problem solving and currently interested
                    in learning more about React and making things
                    pretty and easy to use. 
                </p>
            </div>
            <strong>
                <h3>What do I do?</h3>
            </strong>
            <div className="row">
                    <h4>I am a junior developer</h4>
                    <div className="col-sm-3">
                        <p>For front-end, I usually work
                            with Javascript as well as other
                            framework such as React Js. I also
                            have hands-on experience with CSS and
                            Bootstrap.
                        </p>
                    </div>

                    <div className="col-sm-3">
                        <p>
                            For back-end, I have worked on Javascripts
                            libraries (Node, Express, Ajax, Axios,
                            MongoDB, MySQL).
                        </p>
                    </div>

            </div>
            </div> */}
            </>
        )
    }
}

export default About;