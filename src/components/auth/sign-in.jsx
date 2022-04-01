import { useState } from "react";
import { withRouter } from "react-router-dom";
import { signIn } from "./auth-functions";
import ThemedButton from "../themed-button/themed-button";
import messages from "../alerts/messages.js";

import Form from "react-bootstrap/Form";
import "./sign-in.styles.scss";

const SignIn = ({ msgAlert, history, setUser }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleChange = (event) => {
    event.target.name === "password"
      ? setPassword(event.target.value)
      : setEmail(event.target.value);
  };

  const handleSignIn = (event) => {
    event.preventDefault();

    signIn({ email: email, password: password })
      .then((res) => setUser(res.data.user))
      .then(() =>
        msgAlert({
          heading: "Sign In Success",
          message: messages.signInSuccess,
          variant: "success",
        })
      )
      .then(() => history.push("/home"))
      .catch((error) => {
        setPassword("");
        setEmail("");
        msgAlert({
          heading: "Sign In Failed with error: " + error.message,
          message: messages.signInFailure,
          variant: "danger",
        });
      });
  };

  return (
    <div className="row sign-in">
      <div className="col-sm-10 col-md-8 mx-auto mt-5 mb-5">
        <h3>Sign In</h3>
        <Form onSubmit={handleSignIn}>
          <Form.Group controlId="email">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              required
              type="email"
              name="email"
              value={email}
              placeholder="Enter email"
              onChange={handleChange}
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
              onChange={handleChange}
            />
          </Form.Group>
          <ThemedButton
            className="primary-button no-left-margin"
            message="Submit"
            handleClick={handleSignIn}
          />
        </Form>
      </div>
    </div>
  );
};

export default withRouter(SignIn);
