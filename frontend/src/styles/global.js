import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

/* replace with global theme */

html {
  box-sizing: border-box;
  font-family: 'Open Sans', sans-serif;
  -webkit-tap-highlight-color: transparent;
}

*,
*:before,
*:after {
  box-sizing: inherit;
  font-family: 'Open Sans', sans-serif;
}

body {
  margin: 0;
  padding: 0;
  background-color: ${({ theme }) => theme.backgroundColor};
  color: ${({ theme }) => theme.fontColor};
}

* {
  scrollbar-width: thin;
  scrollbar-color: ${({ theme }) => theme.fontAccent} ${({ theme }) =>
  theme.backgroundColor};
}

*::-webkit-scrollbar {
  width: 8px;
}
*::-webkit-scrollbar-track {
  background: ${({ theme }) => theme.backgroundColor};
}
*::-webkit-scrollbar-thumb {
  background-color: ${({ theme }) => theme.fontAccent};
  border: 3px solid ${({ theme }) => theme.fontAccent};
}
:focus {outline:none;}
::-moz-focus-inner {border:0;}
a:active{background:transparent}
label:active{background:transparent}
`;

export default GlobalStyle;
