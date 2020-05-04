import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
import NavTabs from './components/pages/NavTabs';
import About from './components/pages/About';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="container">
          <h1>The Net Blogz</h1>
          <Router>
            <div>
            <NavTabs />
            <Router exact path="/" component={About} />
            </div>
          </Router>
        </div>
      </header>
      
    </div>
  );
}

export default App;
