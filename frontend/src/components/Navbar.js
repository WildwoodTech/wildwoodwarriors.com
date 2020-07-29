import React from 'react';

import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

import ThemeSwitch from './ThemeSwitcher';

const Navbar = () => {
  return (
    <StyledNav>
      <StyledNavTitleDiv>
        <StyledNavTitle>Warriors Online</StyledNavTitle>
      </StyledNavTitleDiv>
      <StyledLink exact to="/">
        Home
      </StyledLink>
      {/* <StyledLink to="/blog">Blog</StyledLink> */}
      <ThemeSwitch></ThemeSwitch>
    </StyledNav>
  );
};

export default Navbar;

const activeClassName = 'nav-item-active';

const StyledNavTitleDiv = styled.div`
  flex-grow: 1;
`;

const StyledNavTitle = styled.p`
  font-weight: bold;
  font-size: 1.5rem;
  color: ${({ theme }) => theme.fontAccent};
  margin: 0 0 0 1.5rem;
`;

const StyledLink = styled(NavLink).attrs({ activeClassName })`
  text-decoration: none;
  border-bottom: none;
  color: ${({ theme }) => theme.fontColor};
  margin-right: 1.5rem;
  font-weight: 500;
  font-size: 1.3rem;
  border-radius: 0.25rem;

  &:hover {
    color: ${({ theme }) => theme.fontAccent};
  }

  &.${activeClassName} {
    color: ${({ theme }) => theme.fontAccent};
  }
`;

const StyledNav = styled.div`
  display: flex;
  height: 50px;
  justify-content: space-around;
  align-items: center;
  background-color: ${({ theme }) => theme.navBar};

  @media ${({ theme }) => theme.mobileM} {
    ${StyledNavTitleDiv} {
      display: none;
    }
    ${StyledLink} {
      padding: 0;
    }
  }
`;
