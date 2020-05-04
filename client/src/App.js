import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
import NavTabs from './components/NavTabs';
import About from './components/pages/About';
import Blog from './components/pages/Blog';
import Games from './components/pages/Games';
import Resume from './components/pages/Resume';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="container">
          <h1>The Net Blogs</h1>
          </div>
      </header>
        <Router>
            <NavTabs />
            <Route exact path="/about" className="text-left-about" component={About} />
            <Route exact path="/blog" component={Blog} />
            <Route exact path="/games" component={Games} />
            <Route exact path="/resume" className="text-right-resume" component={Resume} />
        </Router>
    </div>
  );
}

export default App;
