import React, { useState, useEffect } from 'react';
import { Route, NavLink, Redirect } from 'react-router-dom';
import styled from 'styled-components';
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

  const sortedArray = videos
    .sort((a, b) => {
      console.log(a);
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
      <StyledLink key={video._id} exact to={`/watch/${video.videoId}`}>
        <StyledImage
          src={`/api/v1/videos/thumbnail/${video.videoId}`}
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = PlaceholderImage;
          }}
        />
        {video.title}
      </StyledLink>
    );
  });
  const peLinks = peArray.map((video) => {
    return (
      <StyledLink key={video._id} exact to={`/watch/${video.videoId}`}>
        <StyledImage
          src={`/api/v1/videos/thumbnail/${video.videoId}`}
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = PlaceholderImage;
          }}
        />
        {video.title}
      </StyledLink>
    );
  });
  const leftOverLinks = leftOverArray.map((video) => {
    return (
      <StyledLink key={video._id} exact to={`/watch/${video.videoId}`}>
        <StyledImage
          src={`/api/v1/videos/thumbnail/${video.videoId}`}
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = PlaceholderImage;
          }}
        />
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
            <StyledCategory>
              <StyledHeadser>Chapel Videos</StyledHeadser>
              <StyledVideoContainer>{chapelLinks}</StyledVideoContainer>
            </StyledCategory>

            <StyledCategory>
              <StyledHeadser>PE Videos</StyledHeadser>
              <StyledVideoContainer>{peLinks}</StyledVideoContainer>
            </StyledCategory>

            <StyledVideoContainer>{leftOverLinks}</StyledVideoContainer>
          </Route>

          {selectVideo}
        </>
      )}
    </>
  );
};

export default Watch;

const StyledHeadser = styled.h1`
  margin: 0px;
  padding: 0px;
  margin: 0 6%;
  border-bottom: 3px solid ${({ theme }) => theme.fontAccent};
  display: inline;

  @media ${({ theme }) => theme.tablet} {
    font-size: 24px;
    margin: 0 8%;
  }
`;

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
  margin-top: 20px;
`;

const StyledCategory = styled.div`
  margin-top: 25px;
`;
