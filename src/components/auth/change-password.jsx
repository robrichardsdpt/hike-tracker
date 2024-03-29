import React, { useState } from "react";
import { withRouter } from "react-router-dom";

import { changePassword } from "./auth-functions";
import "./change-password.styles.scss";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import ThemedButton from "../themed-button/themed-button";

const ChangePassword = ({ user, show, setShow }) => {
  const [password, setPassword] = useState({
    oldPassword: "",
    newPassword: "",
  });

  const handleChange = (event) => {
    event.persist();
    setPassword((prevPassword) => {
      const updatedPassword = { [event.target.name]: event.target.value };
      const editedPassword = Object.assign({}, prevPassword, updatedPassword);
      return editedPassword;
    });
  };

  const onChangePassword = (event) => {
    event.preventDefault();
    changePassword(password, user)
      .then(() => setShow(false))
      .then(() => alert("success"))
      .catch((error) => {
        alert("error creating password ", error);
        setPassword({ oldPassword: "", newPassword: "" });
      });
  };
  return (
    <Modal show={show}>
      <div className="change-password">
        <h3>Change Password</h3>
        <Form onSubmit={onChangePassword}>
          <Form.Group controlId="oldPassword">
            <Form.Label>Old password</Form.Label>
            <Form.Control
              required
              name="oldPassword"
              value={password.oldPassword}
              type="password"
              placeholder="Old Password"
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group controlId="newPassword">
            <Form.Label>New Password</Form.Label>
            <Form.Control
              required
              name="newPassword"
              value={password.newPassword}
              type="password"
              placeholder="New Password"
              onChange={handleChange}
            />
          </Form.Group>
          <ThemedButton
            className="primary-button no-margin-left"
            onClick={() => setShow(false)}
            message="Submit"
          />
          <ThemedButton
            className="primary-button no-margin-left"
            handleClick={() => setShow(false)}
            message="Cancel"
          />
        </Form>
      </div>
    </Modal>
  );
};

export default withRouter(ChangePassword);
