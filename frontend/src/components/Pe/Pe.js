import React from 'react';

// ROUTER AND HISTORY
import { Router, Route, Link, Redirect } from 'react-router-dom';

const Pe = () => {
  return (
    <>
      <div className="Navbar">
        <div className="Navbar__Item">
          <Link to="/pe/elementary">
            <div>Elementary PE</div>
          </Link>
        </div>
        <div className="Navbar__Item">
          <Link to="/pe/middle">
            <div>Middle School PE</div>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Pe;
