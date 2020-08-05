import React, { useState, useEffect } from 'react';
import { Route, NavLink, Redirect } from 'react-router-dom';
import styled from 'styled-components';
import axios from 'axios';

import VideoContainer from '../components/Watch/VideoContainer';

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

  const videoLinks = videos.map((video) => {
    return (
      <StyledLink key={video._id} exact to={`/watch/${video.videoId}`}>
        {video.title}
      </StyledLink>
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
      {/* place holder */}
      <h1>WATCH</h1>
      {isLoading ? null : (
        <>
          <Route exact path="/watch">
            <div style={{ display: 'flex' }}>{videoLinks}</div>
          </Route>

          {selectVideo}
        </>
      )}
    </>
  );
};

export default Watch;

const StyledLink = styled(NavLink)`
  text-decoration: none;
  border-bottom: none;
  color: ${({ theme }) => theme.fontColor};
  width: 150px;
  align-self: center;
  text-align: center;
  border: 3px solid ${({ theme }) => theme.fontAccent};
  border-radius: 0.5rem;
  margin-bottom: 5px;
  box-shadow: 0 3px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);

  &:hover {
    background-color: ${({ theme }) => theme.fontAccent};
  }
`;
