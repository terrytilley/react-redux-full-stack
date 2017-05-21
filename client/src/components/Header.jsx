import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class Header extends Component {
  renderLinks() {
    if (this.props.authenticated) {
      // show a link to sign out
      return (
        <li className="nav-item">
          <Link className="nav-link" to="/signout">Sign Out</Link>
        </li>
      );
    }
      // show a link to sign in or sign up
    return [
      <li className="nav-item" key={1}>
        <Link className="nav-link" to="/signin">Sign In</Link>
      </li>,
      <li className="nav-item" key={2}>
        <Link className="nav-link" to="/signup">Sign Up</Link>
      </li>,
    ];
  }

  render() {
    return (
      <nav className="navbar navbar-toggleable-sm navbar-inverse bg-inverse">
        <div className="container">
          <Link className="navbar-brand" to="/">React Redux Full Stack</Link>

          <div className="collapse navbar-collapse">
            <ul className="navbar-nav">
              {this.renderLinks()}
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

Header.propTypes = {
  // authenticated: PropTypes.func,
};

function mapStateToProps(state) {
  return {
    authenticated: state.auth.authenticated,
  };
}

export default connect(mapStateToProps)(Header);
