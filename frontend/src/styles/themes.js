const lightTheme = {
  backgroundColor: '#edf2f7',
  fontColor: '#201f1d',
  fontAccent: '#802023',
  navBar: '#edf2f7',
  navBarFontColor: '#edf2f7',
  themeSwitcherBackground: '#201f1d',
  themeSwitcherCircle: '#edf2f7',
};

const darkTheme = {
  backgroundColor: '#201f1d',
  fontColor: '#edf2f7',
  fontAccent: '#802023',
  navBar: '#181818',
  themeSwitcherBackground: '#edf2f7',
  themeSwitcherCircle: '#201f1d',
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
