import { useState, useEffect } from 'react';
import styles from './Watch.module.scss';
import { Route, NavLink, Redirect } from 'react-router-dom';
import axios from 'axios';

// Components
import VideoContainer from '../components/Watch/VideoContainer';

// Thumbnail Placeholder
import PlaceholderImage from '../assets/images/placeholder.png';

const Watch = () => {
  const [videos, setVideos] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getVideoHandler = async () => {
    try {
      const { data, status } = await axios.get('/api/v1/videos');
      setVideos(data.data);
      setIsLoading(false);
    } catch (error) {}
  };

  useEffect(() => {
    getVideoHandler();
  }, []);

  const chapelArray = [];
  const peArray = [];
  const leftOverArray = [];

  videos
    .sort((a, b) => {
      return a.createdAt < b.createdAt ? 1 : b.createdAt < a.createdAt ? -1 : 0;
    })
    .find((value) => {
      if (value.category === 'PE') {
        peArray.push(value);
      } else if (value.category === 'Chapel') {
        chapelArray.push(value);
      } else {
        leftOverArray.push(value);
      }
    });

  const chapelLinks = chapelArray.map((video) => {
    return (
      <NavLink
        className={styles['Link']}
        key={video._id}
        exact
        to={`/watch/${video.videoId}`}
      >
        <img
          className={styles['Image']}
          src={`/api/v1/videos/thumbnail/${video.videoId}`}
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = PlaceholderImage;
          }}
        />

        {video.title}
      </NavLink>
    );
  });
  const peLinks = peArray.map((video) => {
    return (
      <NavLink
        className={styles['Link']}
        key={video._id}
        exact
        to={`/watch/${video.videoId}`}
      >
        <img
          className={styles['Image']}
          src={`/api/v1/videos/thumbnail/${video.videoId}`}
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = PlaceholderImage;
          }}
        />

        {video.title}
      </NavLink>
    );
  });
  const leftOverLinks = leftOverArray.map((video) => {
    return (
      <NavLink
        className={styles['Link']}
        key={video._id}
        exact
        to={`/watch/${video.videoId}`}
      >
        <img
          className={styles['Image']}
          src={`/api/v1/videos/thumbnail/${video.videoId}`}
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = PlaceholderImage;
          }}
        />

        {video.title}
      </NavLink>
    );
  });

  const selectVideo = (
    <Route
      exact
      path="/watch/:id"
      render={({ match }) => {
        const video = videos.find((video) => video.videoId === match.params.id);
        if (!video) {
          return <Redirect to="/watch" />;
        }
        return <VideoContainer videoInfo={video} />;
      }}
    ></Route>
  );

  return (
    <>
      {isLoading ? null : (
        <>
          <Route exact path="/watch">
            <div className={styles['Category']}>
              <div className={styles['Listing-Container']}>
                <p className={styles['Header']}>Chapel Videos</p>
                <div className={styles['Video-Container']}>{chapelLinks}</div>
              </div>
            </div>

            <div className={styles['Category']}>
              <div className={styles['Listing-Container']}>
                <p className={styles['Header']}>PE Videos</p>
                <div className={styles['Video-Container']}>{peLinks}</div>
              </div>
            </div>

            <div className={styles['Listing-Container']}>
              <div className={styles['Video-Container']}>{leftOverLinks}</div>
            </div>
          </Route>

          {selectVideo}
        </>
      )}
    </>
  );
};

export default Watch;
