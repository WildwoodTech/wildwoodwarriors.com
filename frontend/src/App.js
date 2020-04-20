import React from 'react';
import './App.css';

// ROUTER AND HISTORY
import { Router, Route, Link, Redirect } from 'react-router-dom';
import history from './history';

// REACT COMPONENTS
import Chapel from './components/Chapel/Chapel';
import Pe from './components/Pe/Pe';

function App() {
  return (
    <>
      <div className="Header">
        <img className="Header__Icon" src="images/wca_logos.png" />
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
      </div>
    </>
  );
}

export default App;
