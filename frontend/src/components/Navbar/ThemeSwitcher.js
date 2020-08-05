import React, { useContext } from 'react';
import styled from 'styled-components';

import { ThemeContext } from '../../context/theme-context';

const ThemeSwitcher = () => {
  const themeContext = useContext(ThemeContext);

  return (
    <>
      <StyledSwitch>
        <StyledInput
          type="checkbox"
          checked={themeContext.theme}
          onChange={() => {
            themeContext.themeHandler(!themeContext.theme);
          }}
        />
        <StyledSpan></StyledSpan>
      </StyledSwitch>
    </>
  );
};

export default ThemeSwitcher;

const StyledSwitch = styled.label`
  position: relative;
  display: inline-block;
  width: 45px;
  height: 24px;
  margin-right: 24px;

  @media ${({ theme }) => theme.mobileM} {
    margin: 0;
  }
`;

const StyledSpan = styled.span`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  /* switcher background */
  /* ${({ theme }) => theme.backgroundColor} */
  background-color: ${({ theme }) => theme.themeSwitcherBackground};
  -webkit-transition: 0.4s;
  transition: 0.4s;
  border-radius: 34px;

  &::before {
    position: absolute;
    content: '';
    height: 16px;
    width: 16px;
    left: 4px;
    bottom: 4px;
    background-color: ${({ theme }) => theme.themeSwitcherCircle};
    -webkit-transition: 0.4s;
    transition: 0.4s;
    border-radius: 50%;
  }
`;

const StyledInput = styled.input`
  opacity: 0;
  width: 0;
  height: 0;

  &:checked + ${StyledSpan} {
    background-color: ${({ theme }) => theme.themeSwitcherBackground};
  }

  &:focus + ${StyledSpan} {
    /* box-shadow: 0 0 1px #2196f3; */
  }

  &:checked + ${StyledSpan}::before {
    -webkit-transform: translateX(19px);
    -ms-transform: translateX(19px);
    transform: translateX(19px);
  }
`;
