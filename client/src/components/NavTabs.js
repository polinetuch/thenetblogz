import React from 'react';
import { Link } from 'react-router-dom';

class NavTabs extends React.Component {
    render() {
        return (
            <ul className="nav nav-tabs">
                <li className="nav-item">
                <Link to="/about" className={window.location.pathname === "/about" ? 
               "nav-link active" : "nav-link"}>About</Link>
                </li>

                <li className="nav-item">
                    <Link to="/blog" className={window.location.pathname === "/blog" 
                    ? "nav-link active" : "nav-link"}>Blog</Link>
                </li>
            </ul>
            
        )

    }
}

export default NavTabs;

