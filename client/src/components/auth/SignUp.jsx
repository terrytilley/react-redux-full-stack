import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { signUpUser } from '../../actions';

class SignUp extends Component {
  constructor(props) {
    super(props);

    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(values) {
    const { email, password } = values;
    this.props.signUpUser({ email, password }, () => {
      this.props.history.push('/dashboard');
    });
  }

  renderField(field) {
    const { meta: { touched, error } } = field;
    const className = `form-group ${touched && error ? 'has-danger' : ''}`;

    return (
      <div className={className}>
        <label htmlFor="title">{field.label}</label>
        <input
          className="form-control"
          type={field.type}
          {...field.input}
        />
        <div className="form-control-feedback">
          {touched ? error : ''}
        </div>
      </div>
    );
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
            <h2 className="text-center">Sign Up</h2>
            <form onSubmit={handleSubmit(this.onSubmit)}>
              {this.renderAlert()}
              <Field
                label="Email"
                name="email"
                type="email"
                component={this.renderField}
              />
              <Field
                label="Password"
                name="password"
                type="password"
                component={this.renderField}
              />
              <Field
                label="Confirm Password"
                name="confirmPassword"
                type="password"
                component={this.renderField}
              />
              <button type="submit" className="btn btn-primary">Sign Up</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}


function validate(values) {
  const errors = {};

  if (values.password !== values.confirmPassword) { errors.confirmPassword = 'Passwords must match'; }
  if (!values.email) { errors.email = 'Please enter an email'; }
  if (!values.password) { errors.password = 'Please enter a password'; }
  if (!values.confirmPassword) { errors.confirmPassword = 'Please enter a password confirmation'; }

  return errors;
}

SignUp.propTypes = {
  signUpUser: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
};

function mapStateToProps(state) {
  return { errorMessage: state.auth.error };
}

export default reduxForm({
  validate,
  form: 'SignUpForm',
})(connect(mapStateToProps, { signUpUser })(SignUp));
