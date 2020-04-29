import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="container">
          <h1>The Net Blogz</h1>
          <div className="row">
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
              <div className="col-sm-4">
                <a class="nav-item nav-link active" href="#">Home <span class="sr-only">(current)</span></a>
              </div>
              <div className="col-sm-4">
                <a className="nav-item nav-link active" href="#">About Me</a>
              </div>
              <div className="col-sm-4">
                <a className="nav-item nav-link active" href="#">Blog</a>
              </div>
            </nav>
          </div>
        </div>
      </header>
      
    </div>
  );
}

export default App;
