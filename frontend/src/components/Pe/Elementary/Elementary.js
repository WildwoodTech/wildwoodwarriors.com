import React from 'react';

// ROUTER AND HISTORY
import { Router, Route, Link, Redirect } from 'react-router-dom';

const Elementary = () => {
  return (
    <div>
      <div className="Navbar">
        <div className="Navbar__Item">
          <Link to="/pe/elementary">
            <div>Elementary PE</div>
          </Link>
        </div>
        <div className="Navbar__Item">
          <Link to="/pe/middle">
            <div>Middle School PE</div>
          </Link>
        </div>
      </div>
      <div className="Info">
        <p>Physical Education</p>
        <p>Elementary Grades</p>
      </div>
      <div className="Content">
        <div></div>
        <div className="Content__Player">
          <div className="player-wrapper">
            <video className="react-player" width="100%" height="100%" controls>
              <source
                src="/api/v1/videos/ElementaryPE_1"
                type="video/mp4"
              ></source>
            </video>
          </div>
        </div>
      </div>
      <div className="Footer"></div>
    </div>
  );
};

export default Elementary;
