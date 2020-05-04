import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
import NavTabs from './components/NavTabs';
import About from './components/pages/About';
import Blog from './components/pages/Blog';
import Games from './components/pages/Games'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="container">
          <h1>The Net Blogz</h1>
          </div>
      </header>
          <Router>
            <div>
            <NavTabs />
            <Route exact path="/about" component={About} />
            <Route exact path="/blog" component={Blog} />
            <Route exact path="/games" component={Games} />
            </div>
          </Router>
    </div>
  );
}

export default App;
