import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { signInUser } from '../../actions';

class SignIn extends Component {
  constructor(props) {
    super(props);

    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(values) {
    const { email, password } = values;
    this.props.signInUser({ email, password }, () => {
      this.props.history.push('/');
    });
  }

  renderAlert() {
    if (this.props.errorMessage) {
      return (
        <div className="alert alert-danger">
          <strong>Oops!</strong> {this.props.errorMessage}
        </div>
      );
    }
  }

  render() {
    const { handleSubmit } = this.props;

    return (
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <h2 className="text-center">Sign In</h2>
            <form onSubmit={handleSubmit(this.onSubmit)}>
              {this.renderAlert()}
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
  signInUser: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
};

function mapStateToProps(state) {
  return { errorMessage: state.auth.error };
}

export default reduxForm({
  form: 'SignInForm',
})(connect(mapStateToProps, { signInUser })(SignIn));
