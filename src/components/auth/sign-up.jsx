import React, { Component } from "react";
import { withRouter } from "react-router-dom";

import { signUp, signIn } from "./auth-functions";
import messages from "../alerts/messages.js";

import Form from "react-bootstrap/Form";
import "./sign-up.styles.scss";
import ThemedButton from "../themed-button/themed-button";

class SignUp extends Component {
  constructor() {
    super();

    this.state = {
      firstName: "",
      lastName: "",
      role: "",
      email: "",
      password: "",
      passwordConfirmation: "",
    };
  }

  handleChange = (event) =>
    this.setState({
      [event.target.name]: event.target.value,
    });

  onSignUp = (event) => {
    event.preventDefault();

    const { msgAlert, history, setUser } = this.props;

    signUp(this.state)
      .then(() => signIn(this.state))
      .then((res) => setUser(res.data.user))
      .then(() =>
        msgAlert({
          heading: "Sign Up Success",
          message: messages.signUpSuccess,
          variant: "success",
        })
      )
      .then(() => history.push("/home"))
      .catch((error) => {
        this.setState({ email: "", password: "", passwordConfirmation: "" });
        msgAlert({
          heading: "Sign Up Failed with error: " + error.message,
          message: messages.signUpFailure,
          variant: "danger",
        });
      });
  };

  render() {
    const { email, password, passwordConfirmation } = this.state;

    return (
      <div className="row sign-up">
        <div className="col-sm-10 col-md-8 mx-auto mt-5 mb-5">
          <h3>Sign Up</h3>
          <Form onSubmit={this.onSignUp}>
            <Form.Group controlId="email">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                required
                type="email"
                name="email"
                value={email}
                placeholder="Enter email"
                onChange={this.handleChange}
              />
            </Form.Group>
            <Form.Group controlId="password">
              <Form.Label>Password</Form.Label>
              <Form.Control
                required
                name="password"
                value={password}
                type="password"
                placeholder="Password"
                onChange={this.handleChange}
              />
            </Form.Group>
            <Form.Group controlId="passwordConfirmation">
              <Form.Label>Password Confirmation</Form.Label>
              <Form.Control
                required
                name="passwordConfirmation"
                value={passwordConfirmation}
                type="password"
                placeholder="Confirm Password"
                onChange={this.handleChange}
              />
            </Form.Group>
            <ThemedButton
              className="primary-button no-left-margin"
              type="submit"
              message="Submit"
            />
          </Form>
        </div>
      </div>
    );
  }
}

export default withRouter(SignUp);
