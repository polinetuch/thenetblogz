import React from 'react';
import { Link } from 'react-router-dom';

class NavTabs extends React.Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <nav className="topnav">
                        <ul className="nav nav-tabs">
                            <div className="col-sm-3">
                                <li className="nav-item text-right-about">
                                    <Link to="/about" className={window.location.pathname === "/about" ? 
                                    "nav-link active" : "nav-link"}>About</Link>
                                </li>
                            </div>

                            <div className="col-sm-3">
                                <li className="nav-item">
                                    <Link to="/blog" className={window.location.pathname === "/blog" 
                                    ? "nav-link active" : "nav-link"}>Blog</Link>
                                </li>
                            </div>

                            <div className="col-sm-3">
                                <li className="nav-item">
                                    <Link to="/games" className={window.location.pathname === "/games"
                                    ? "nav-link active" : "nav-link"}>Games</Link>
                                </li>
                            </div>

                            <div className="col-sm-3">
                                <li className="nav-item text-left-blog">
                                    <Link to="/resume" className={window.location.pathname === "/resume"
                                    ? "nav-link active" : "nav-link"}>Resume</Link>
                                </li>
                            </div>
                        </ul>
                    </nav>
                </div>
            </div>
            
        )

    }
}

export default NavTabs;

