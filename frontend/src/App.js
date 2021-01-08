// ROUTER
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';

// Containers
import Home from './containers/Home';
import Watch from './containers/Watch';
// import ElementarySchool from './containers/ElementarySchool';
// import MiddleSchool from './containers/MiddleSchool';
import Admin from './containers/Admin';

// Components
import NavBar from './components/Navbar/Navbar';

// Logo
import Logo from './assets/images/wca_logos.png';

const App = () => {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/watch">
          <Watch />
        </Route>
        {/* <Route exact path="/elementaryschool">
          <ElementarySchool />
        </Route>
        <Route exact path="/middleschool">
          <MiddleSchool />
        </Route> */}
        <Route exact path="/admin">
          <Admin />
        </Route>
        <Redirect to="/" />
      </Switch>
    </Router>
  );
};

export default App;
