import React from 'react';
import styles from './VideoContainer.module.scss';
import { NavLink } from 'react-router-dom';

const VideoContainer = (props) => {
  console.log(props);
  return (
    <>
      <div className={styles['Main-Container']}>
        <div></div>
        <div className={styles['Player-Wrapper']}>
          <div className={styles['Video-Wrapper']}>
            <video
              className={styles['Video']}
              width="100%"
              height="100%"
              controls
            >
              <source
                src={`/api/v1/videos/${props.videoInfo.videoId}`}
                type="video/mp4"
              ></source>
            </video>
          </div>
          <p className={styles['Title']}>{props.videoInfo.title}</p>
        </div>
        <div></div>
      </div>
      <div className="Footer"></div>
    </>
  );
};

export default VideoContainer;
