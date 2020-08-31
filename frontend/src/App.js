import React, { useContext } from 'react';
import './App.css';

// ROUTER
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';

// Styling
import styled, { ThemeProvider } from 'styled-components';
import { ThemeContext } from './context/theme-context';
import GlobalStyle from './styles/global';
import themeSelector from './styles/themes';

// Containers
import Home from './containers/Home';
import Watch from './containers/Watch';
import ElementarySchool from './containers/ElementarySchool';
import MiddleSchool from './containers/MiddleSchool';
import Admin from './containers/Admin';

// Components
import NavBar from './components/Navbar/Navbar';

// LOGO
import Logo from './assets/images/wca_logos.png';

const App = () => {
  const themeContext = useContext(ThemeContext);
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
          <Route path="/watch">
            <Watch />
          </Route>
          <Route exact path="/elementaryschool">
            <ElementarySchool />
          </Route>
          <Route exact path="/middleschool">
            <MiddleSchool />
          </Route>
          <Route exact path="/admin">
            <Admin />
          </Route>
          <Redirect to="/" />
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
