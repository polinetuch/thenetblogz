import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
import NavTabs from './components/NavTabs';
import About from './components/pages/About';
import Blog from './components/pages/Blog';
// import Games from './components/pages/Games';
import Projects from './components/pages/Projects';
import projects from './components/pages/projects.json';

class App extends React.Component {
  state = {
    projects
  };

  render() {

  return (
    <div className="App">
      <header className="App-header">
        <div className="container">
            The Net Blogs
          </div>
      </header>
        <Router>
            <NavTabs />
            <Route exact path="/about" component={About} />
            <Route exact path="/projects" component={Projects}/>
            <Route exact path="/blog" component={Blog} />
            {/* <Route exact path="/games" component={Games} /> */}
        </Router>
    </div>
  );
}
}

export default App;
