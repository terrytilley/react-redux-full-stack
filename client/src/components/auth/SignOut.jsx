import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { signOutUser } from '../../actions';

class SignOut extends Component {
  componentWillMount() {
    this.props.signOutUser();
  }

  render() {
    return (
      <div className="container">
        <h3 className="text-center">Sorry to see you go...</h3>
      </div>
    );
  }
}

SignOut.propTypes = {
  signOutUser: PropTypes.func.isRequired,
};

export default connect(null, { signOutUser })(SignOut);
