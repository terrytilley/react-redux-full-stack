import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';

class SignIn extends Component {
  constructor(props) {
    super(props);

    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(values) {
    console.log(values);
  }

  render() {
    const { handleSubmit } = this.props;

    return (
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <h2 className="text-center">Sign In</h2>
            <form onSubmit={handleSubmit(this.onSubmit)}>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <Field className="form-control" name="email" component="input" type="email" />
              </div>

              <div className="form-group">
                <label htmlFor="password">Password</label>
                <Field className="form-control" name="password" component="input" type="password" />
              </div>

              <button type="submit" className="btn btn-primary">Sign In</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

SignIn.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
};

export default reduxForm({
  form: 'SignInForm',
})(connect(null, {})(SignIn));
