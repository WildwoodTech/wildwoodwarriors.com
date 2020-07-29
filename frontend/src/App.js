import React, { useContext } from 'react';
import './App.css';

// ROUTER
import {
  BrowserRouter as Router,
  Route,
  Switch,
  useLocation,
} from 'react-router-dom';

// Styling
import { ThemeProvider } from 'styled-components';
import { ThemeContext } from './context/theme-context';
import GlobalStyle from './styles/global';
import themeSelector from './styles/themes';

// Containers
import Home from './components/Home';
import Watch from './components/Watch';

// Components
import NavBar from './components/Navbar';

// LOGO
import Logo from './assets/images/wca_logos.png';

// A custom hook that builds on useLocation to parse
// the query string for you.
// const useQuery = () => {
//   return new URLSearchParams(useLocation().search);
// };

const App = () => {
  const themeContext = useContext(ThemeContext);
  // let query = useQuery();
  return (
    <ThemeProvider theme={themeSelector(themeContext.theme)}>
      <Router>
        <NavBar />
        <div className="Header">
          <img className="Header__Icon" src={Logo} />
        </div>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          {/* <Route
          exact
          path="/watch"
          render={() => (
            <Watch
              location={query.get('v')}
              title={query.get('til')}
              teacher={query.get('tec')}
            />
          )}
        /> */}
        </Switch>
      </Router>
      <GlobalStyle />
    </ThemeProvider>
  );
};

export default App;
