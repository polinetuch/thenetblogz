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
              <div className="col-sm-8">
                <a class="nav-item nav-link active" href="#">Home <span class="sr-only">(current)</span></a>
              </div>
            </nav>
          </div>
        </div>
      </header>
  {/* <a class="navbar-brand" href="#">Navbar</a> */}
  {/* <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation"> */}
    {/* <span class="navbar-toggler-icon">Button</span>
  </button> */}
  {/* <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
    <div class="navbar-nav">
      <a class="nav-item nav-link active" href="#">Home <span class="sr-only">(current)</span></a>
      <a class="nav-item nav-link" href="#">About Me</a>
      <a class="nav-item nav-link" href="#">Blog</a>
      <a class="nav-item nav-link" href="#">Github</a>
    </div>
  </div> */}
      
    </div>
  );
}

export default App;
