import { useState } from "react";
import { withRouter } from "react-router-dom";
import { signIn } from "./auth-functions";
import ThemedButton from "../themed-button/themed-button";
import Input from "../input/input";
import messages from "../alerts/messages.js";
import "./auth.styles.scss";

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
    <div className="auth__container">
      <div className="auth__form">
        <h2 className={"auth-title"}>sign in</h2>
        <form onSubmit={handleSignIn}>
          <label className="auth-label">email address</label>
          <Input
            required
            className="width-100"
            type="email"
            name="email"
            value={email}
            placeholder="Enter email"
            handleChange={handleChange}
          />
          <label>password</label>
          <Input
            required
            className="width-100"
            name="password"
            value={password}
            type="password"
            placeholder="Password"
            handleChange={handleChange}
          />
          <ThemedButton
            className="primary-button no-left-margin"
            message="Submit"
            handleClick={handleSignIn}
          />
        </form>
      </div>
    </div>
  );
};

export default withRouter(SignIn);
