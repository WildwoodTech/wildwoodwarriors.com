import React from 'react';
import './App.scss';

// ROUTER
import {
  Router,
  Route,
  Link,
  Redirect,
  Switch,
  useLocation,
} from 'react-router-dom';

// REACT COMPONENTS
import Home from './components/Home/Home';
import Watch from './components/Watch/Watch';

// LOGO
import Logo from './assets/images/wca_logos.png';

// VIDEO THIMBNAILS
import Chapel_5_7 from './assets/images/chapel_5-7.png';

// A custom hook that builds on useLocation to parse
// the query string for you.
const useQuery = () => {
  return new URLSearchParams(useLocation().search);
};

function App() {
  let query = useQuery();
  return (
    <>
      <div className="Header">
        <img className="Header__Icon" src={Logo} />
      </div>
      <Switch>
        <Route exact path="/" render={() => <Home />} />
        <Route
          exact
          path="/watch"
          render={() => (
            <Watch
              location={query.get('v')}
              title={query.get('til')}
              teacher={query.get('tec')}
            />
          )}
        />
      </Switch>
    </>
  );
}

export default App;
