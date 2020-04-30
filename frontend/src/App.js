import React from 'react';
import './App.css';

// ROUTER
import { Router, Route, Link, Redirect } from 'react-router-dom';

// REACT COMPONENTS
import Chapel from './components/Chapel/Chapel';
import Pe from './components/Pe/Pe';
import Middle from './components/Pe/Middle/Middle';
import Elementary from './components/Pe/Elementary/Elementary';

// LOGO
import Logo from './assets/images/wca_logos.png';

function App() {
  return (
    <>
      <div className="Header">
        <img className="Header__Icon" src={Logo} />
      </div>
      <div className="Navbar">
        <div className="Navbar__Item">
          <Link to="/chapel">
            <div>Chapel</div>
          </Link>
        </div>
        <div className="Navbar__Item">
          <Link to="/pe">
            <div>Physical Education</div>
          </Link>
        </div>
      </div>
      <div>
        <Route
          exact
          path="/"
          render={() => <Redirect to="/chapel"></Redirect>}
        />
        <Route exact path="/chapel" render={(props) => <Chapel />} />
        <Route exact path="/pe" render={(props) => <Pe />} />
        <Route exact path="/pe/middle" render={(props) => <Middle />} />
        <Route exact path="/pe/elementary" render={(props) => <Elementary />} />
      </div>
    </>
  );
}

export default App;
