import React from "react";
import { Modal } from "react-bootstrap";
import apiUrl from "../../apiConfig.js";
import S3 from "react-aws-s3";
import axios from "axios";
import NoPhoto from "./no-photo-avail.jpg";
import "./user-profile.styles.scss";

const UserModal = ({ user, show, handleClose, handleUserImageChange }) => {
  const secret = process.env.REACT_APP_SECRET_KEY;
  const access = process.env.REACT_APP_ACCESS_KEY;

  const config = {
    bucketName: "hike-tracker",
    region: "us-east-2",
    accessKeyId: access,
    secretAccessKey: secret,
  };

  const ReactS3Client = new S3(config);
  /*  Notice that if you don't provide a dirName, the file will be automatically uploaded to the root of your bucket */

  const onFileChange = (event) => {
    const file = event.target.files[0];
    ReactS3Client.uploadFile(file)
      .then((data) => {
        handleUserImageChange(data.location);
        return axios({
          url: `${apiUrl}/users/${user._id}`,
          method: "PATCH",
          headers: {
            Authorization: `Token token=${user.token}`,
          },
          data: {
            profileImage: data.location,
          },
        });
      })
      .catch((err) => console.error(err));
  };

  return (
    <div>
      <Modal show={show} onHide={handleClose} className="edit-user-container">
        <Modal.Header closeButton className="edit-user-title">
          <Modal.Title>Edit User</Modal.Title>
        </Modal.Header>
        <Modal.Body className="edit-user-body">
          {user.profileImage ? (
            <div className="user-picture-container">
              <img
                className="user-picture"
                src={user.profileImage}
                alt="profile"
              />
            </div>
          ) : (
            <div className="user-picture-container">
              <img className="user-picture" src={NoPhoto} alt="no-profile" />
            </div>
          )}
          <label className="edit-user-label">Add/Replace picture:</label>
          <br />
          <input
            className="edit-user-input"
            name="profileImage"
            type="file"
            onChange={onFileChange}
          />
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default UserModal;
