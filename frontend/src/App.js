import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="Header">
        <img className="Header__Icon" src="images/wca_logos.png" />
      </div>
      <div className="Info">
        <p>Chapel with Pastor Phil</p>
        <p>Current Week: April 16th</p>
      </div>
      <div className="Content">
        <div></div>
        <div className="Content__Player">
          <div className="player-wrapper">
            <video className="react-player" width="100%" height="100%" controls>
              <source src="/api/v1/videos/1" type="video/mp4"></source>
            </video>
          </div>
        </div>
        <div></div>
      </div>
      <div className="Footer"></div>
    </div>
  );
}

export default App;
