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
import styled, { ThemeProvider } from 'styled-components';
import { ThemeContext } from './context/theme-context';
import GlobalStyle from './styles/global';
import themeSelector from './styles/themes';

// Containers
import Home from './containers/Home';
import Watch from './containers/Watch';

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
        <Switch>
          <Route exact path="/">
            <StyledHeader>
              <StyledHeaderImage className="Header__Icon" src={Logo} />
            </StyledHeader>
            <Home />
          </Route>
          <Route exact path="/watch">
            <Watch />
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

const StyledHeader = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto;
  margin-top: 20px;
`;

const StyledHeaderImage = styled.img`
  justify-self: center;
  height: 100px;
`;
