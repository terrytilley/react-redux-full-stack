import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {
  render() {
    return (
      <nav className="navbar navbar-toggleable-sm navbar-inverse bg-inverse">
        <div className="container">
          <Link className="navbar-brand" to="/">React Redux Full Stack</Link>

          <div className="collapse navbar-collapse">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link" to="/signin">Sign In</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/signup">Sign Up</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default Header;
