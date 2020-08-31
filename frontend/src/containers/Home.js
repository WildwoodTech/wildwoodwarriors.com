import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const Home = () => {
  return (
    <>
      <StyledHomeLinkContainer>
        <StyledLink to="/elementaryschool">1st Grade</StyledLink>

        <StyledLink to="/elementaryschool">2nd Grade</StyledLink>

        <StyledLink to="/elementaryschool">3rd Grade</StyledLink>

        <StyledLink to="/elementaryschool">4th Grade</StyledLink>

        <StyledLink to="/elementaryschool">5th Grade</StyledLink>

        <StyledLink to="/middleschool">6th Grade</StyledLink>

        <StyledLink to="/middleschool">7th Grade</StyledLink>

        <StyledLink to="/middleschool">8th Grade</StyledLink>
      </StyledHomeLinkContainer>
    </>
  );
};

export default Home;

const StyledLink = styled(NavLink)`
  display: grid;
  text-decoration: none;
  border-bottom: none;
  color: ${({ theme }) => theme.fontColor};
  width: 200px;
  height: 50px;
  border: 3px solid ${({ theme }) => theme.fontAccent};
  border-radius: 0.5rem;
  margin-bottom: 5px;
  box-shadow: 0 3px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
  margin: 0px 2%;
  margin-bottom: 20px;
  background-color: ${({ theme }) => theme.buttonBackgroundColor};
  text-align: center;
  padding-top: 7px;
  font-size: 1.5rem;

  &:hover {
    color: #edf2f7;
    background-color: ${({ theme }) => theme.fontAccent};
    border: 3px solid ${({ theme }) => theme.buttonBorderHoverColor};
  }

  @media ${({ theme }) => theme.tablet} {
    width: 100px;
    font-size: 1rem;
    padding-top: 12px;
  }
`;

const StyledHomeLinkContainer = styled.div`
  display: flex;
  flex-flow: row wrap;
  margin: 0 20%;
  margin-top: 40px;
  justify-content: center;

  @media ${({ theme }) => theme.laptopL} {
    margin: 0 5%;
    margin-top: 40px;
  }
`;
