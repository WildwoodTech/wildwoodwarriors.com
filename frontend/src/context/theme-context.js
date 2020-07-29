import React, { useState } from 'react';

export const ThemeContext = React.createContext({
  theme: '',
});

const ThemeContextProvider = (props) => {
  const [theme, setTheme] = useState(
    localStorage.getItem('lightTheme') === 'true'
  );

  const themeHandler = (theme) => {
    localStorage.setItem('lightTheme', theme);
    setTheme(theme);
  };

  return (
    <ThemeContext.Provider value={{ themeHandler, theme }}>
      {props.children}
    </ThemeContext.Provider>
  );
};

export default ThemeContextProvider;
