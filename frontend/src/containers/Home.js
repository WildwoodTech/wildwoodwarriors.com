import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const Home = () => {
  return (
    <>
      <StyledHomeLinkContainer>
        <StyledLink to="/watch">Videos</StyledLink>
        <StyledLink to="/elementaryschool">First Grade</StyledLink>
        <StyledLink to="/elementaryschool">Second Grade</StyledLink>
        <StyledLink to="/elementaryschool">Third Grade</StyledLink>
        <StyledLink to="/elementaryschool">Fourth Grade</StyledLink>
        <StyledLink to="/elementaryschool">Fifth Grade</StyledLink>
        <StyledLink to="/middleschool">Sixth Grade</StyledLink>
        <StyledLink to="/middleschool">Seventh Grade</StyledLink>
        <StyledLink to="/middleschool">Eighth Grade</StyledLink>
      </StyledHomeLinkContainer>
    </>
  );
};

export default Home;

const activeClassName = 'nav-item-active';

const StyledLink = styled(NavLink).attrs({ activeClassName })`
  text-decoration: none;
  border-bottom: none;
  color: ${({ theme }) => theme.fontColor};
  width: 200px;
  align-self: center;
  text-align: center;
  border: 3px solid ${({ theme }) => theme.fontAccent};
  border-radius: 0.5rem;
  margin-bottom: 5px;
  box-shadow: 0 3px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);

  &:hover {
    /* color: ${({ theme }) => theme.fontAccent}; */
    background-color: ${({ theme }) => theme.fontAccent};
  }

  &.${activeClassName} {
    color: ${({ theme }) => theme.fontAccent};
  }
`;

const StyledHomeLinkContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
