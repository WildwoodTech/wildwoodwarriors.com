import React from 'react';

// Needs styled components rework

const VideoContainer = (props) => {
  console.log(props);
  return (
    <>
      <div className="Content">
        <div></div>
        <div className="Content__Player">
          <div className="player-wrapper">
            <video className="react-player" width="100%" height="100%" controls>
              <source
                src={`/api/v1/videos/${props.videoInfo.videoId}`}
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

export default VideoContainer;