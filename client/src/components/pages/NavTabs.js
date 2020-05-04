import React from 'react';
import { Link } from 'react-router-dom';

function NavTabs() {
    return (
        <div className="col-sm-4">
           <Link to="/about" className={window.location.pathname === "/about" ? 
           "nav-link active" : "nav-link"}>About</Link>
        </div>
    )
}

export default NavTabs;