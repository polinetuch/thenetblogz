import React from 'react';

class About extends React.Component{
    render() {
        return (
            <>
            <h1>Who am I?</h1>
            <strong>
                <h3>
                    My name is Polinet 
                </h3>
            </strong>
            <p>
                I am a junior full-stack web developer based
                in Melbourne. 
                I enjoy problem solving and currently interested
                in learning more about React and making things
                pretty and easy to use. I am also adventurous
                with <span>🍜🍕🍙🍝</span>. This may sounds weird to some but
                I've eaten these guys before
                🦗 and tarantula. 
            </p>
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
            </>
        )
    }
}

export default About;