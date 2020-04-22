import React from 'react';

const Chapel = () => {
  return (
    <>
      <div className="Info">
        <p>Chapel with Pastor Andrew</p>
        <p>Current Week: April 23rd</p>
      </div>
      <div className="Content">
        <div></div>
        <div className="Content__Player">
          <div className="player-wrapper">
            <video className="react-player" width="100%" height="100%" controls>
              <source
                src="/api/v1/videos/chapel_4-23-20"
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
