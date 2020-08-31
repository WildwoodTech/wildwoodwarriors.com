import React from 'react';

// ROUTER
import { Router, Route, Link, Redirect, Switch } from 'react-router-dom';

const Chapel = (props) => {
  return (
    <>
      <div className="Return__Link">
        <Link to={`/`}>
          <p>Return to Home</p>
        </Link>
      </div>
      <div className="Info">
        <p>{`${props.title} with ${props.teacher}`}</p>
      </div>
      <div className="Content">
        <div></div>
        <div className="Content__Player">
          <div className="player-wrapper">
            <video className="react-player" width="100%" height="100%" controls>
              <source
                src={`/api/v1/videos/${props.location}`}
                type="video/mp4"
              ></source>
            </video>
          </div>
        </div>
        <div></div>
      </div>
      <div className="Footer"></div>
    </>
  );
};

export default Chapel;
