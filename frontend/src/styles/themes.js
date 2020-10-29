const lightTheme = {
  backgroundColor: '#edf2f7',
  fontColor: '#262626',
  fontAccent: '#802023',
  navBar: '#bec2C6',
  // navBarFontColor: '#edf2f7',
  themeSwitcherBackground: '#262626',
  themeSwitcherCircle: '#edf2f7',
  buttonBackgroundColor: '#80202350',
  buttonBorderHoverColor: '#262626',
};

const darkTheme = {
  backgroundColor: '#262626',
  fontColor: '#edf2f7',
  fontAccent: '#802023',
  navBar: '#181818',
  themeSwitcherBackground: '#edf2f7',
  themeSwitcherCircle: '#262626',
  buttonBackgroundColor: '#80202350',
  buttonBorderHoverColor: '#edf2f7',
};

const screenSizes = {
  mobileS: `(max-width: 320px)`,
  mobileM: `(max-width: 375px)`,
  mobileL: `(max-width: 425px)`,
  tablet: `(max-width: 768px)`,
  laptop: `(max-width: 1024px)`,
  laptopL: `(max-width: 1440px)`,
  desktop: `(max-width: 2560px)`,
};

const themeSelector = (theme) => {
  switch (theme) {
    case true:
      return { ...lightTheme, ...screenSizes };
    case false:
      return { ...darkTheme, ...screenSizes };
    default:
      return { ...darkTheme, ...screenSizes };
  }
};

export default themeSelector;
