import React from 'react';

const Pe = () => {
  return (
    <>
      <div className="Info">
        <p>Physical Education</p>
        <p>Weekly challenge #1</p>
      </div>
      <div className="Content">
        <div></div>
        <div className="Content__Player">
          <div className="player-wrapper">
            <video className="react-player" width="100%" height="100%" controls>
              <source src="/api/v1/videos/pe_1" type="video/mp4"></source>
            </video>
          </div>
        </div>
        <div></div>
      </div>
      <div className="Footer"></div>
    </>
  );
};

export default Pe;
