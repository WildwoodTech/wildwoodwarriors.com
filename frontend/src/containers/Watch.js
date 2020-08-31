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
        <StyledImage src={`/api/v1/videos/thumbnail/${video.videoId}`} />
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
      {isLoading ? null : (
        <>
          <Route exact path="/watch">
            <StyledVideoContainer>{videoLinks}</StyledVideoContainer>
          </Route>

          {selectVideo}
        </>
      )}
    </>
  );
};

export default Watch;

const StyledImage = styled.img`
  width: 100%;
`;

const StyledLink = styled(NavLink)`
  text-decoration: none;
  border-bottom: none;
  color: ${({ theme }) => theme.fontColor};
  width: 250px;
  margin-bottom: 5px;
  margin: 0px 15px;
  margin-bottom: 30px;
  word-wrap: break-word;
  font-size: 1.2rem;
  font-weight: bold;

  /* &:hover {
    background-color: ${({ theme }) => theme.fontAccent};
  } */
  @media ${({ theme }) => theme.laptop} {
    width: 200px;
    font-size: 1rem;
  }
  @media ${({ theme }) => theme.tablet} {
    width: 150px;
    font-size: 1rem;
  }
`;

const StyledVideoContainer = styled.div`
  display: flex;
  flex-flow: row wrap;
  margin: 0 5%;
  margin-top: 40px;
`;
