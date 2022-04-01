import React, { useEffect, useState } from "react";
import { Modal } from "react-bootstrap";
import apiUrl from "../../apiConfig.js";
import Input from "../input/input.jsx";
import S3 from "react-aws-s3";
import axios from "axios";
import "./edit-modal.styles.scss";
import ThemedButton from "../themed-button/themed-button.jsx";

const EditModal = ({ user, hikeId, show, handleClose }) => {
  const [hike, setHike] = useState({});
  const [deleteShow, setDeleteShow] = useState(false);
  const [updateHike, setUpdateHike] = useState(false);

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
      .then((data) =>
        setHike((prevPost) => {
          const updatedPost = { [event.target.name]: data.location };
          const editedPost = Object.assign({}, prevPost, updatedPost);
          return editedPost;
        })
      )
      .catch((err) => console.error(err));
  };

  const handleChange = (event) => {
    event.persist();
    setHike((prevPost) => {
      const updatedPost = { [event.target.name]: event.target.value };
      const editedPost = Object.assign({}, prevPost, updatedPost);
      return editedPost;
    });
  };

  const handleSave = (e) => {
    e.preventDefault();
    axios({
      url: `${apiUrl}/hikes/${hikeId}`,
      method: "PATCH",
      headers: {
        Authorization: `Token token=${user.token}`,
      },
      data: { hike },
    })
      .then(() => setHike({}))
      .then(() => handleClose())
      .then(() => setUpdateHike(true))
      .catch((err) => console.error(err));
  };

  const deleteItem = (e) => {
    e.preventDefault();
    axios({
      url: `${apiUrl}/hikes/${hikeId}`,
      method: "DELETE",
      headers: {
        Authorization: `Token token=${user.token}`,
      },
    })
      .then(() => setHike({}))
      .then(() => setDeleteShow(true))
      .then(() => handleClose())

      .catch((err) => console.error(err));
  };

  useEffect(() => {
    axios({
      url: `${apiUrl}/hikes/${hikeId}`,
      method: "GET",
      headers: {
        Authorization: `Token token=${user.token}`,
      },
    }).then((res) => setHike(res.data.hike));
  }, [updateHike, hikeId, user.token]);

  return (
    <div>
      <Modal show={show} onHide={handleClose} className="edit-hike-container">
        <Modal.Header closeButton className="edit-hike-title">
          <Modal.Title>Edit Hike</Modal.Title>
        </Modal.Header>
        <Modal.Body className="edit-hike-body">
          <form id="edit-hike" onSubmit={handleSave}>
            <label className="edit-hike-label">Date:</label>
            <Input
              className="edit-hike-input"
              name="date"
              id="date"
              type="date"
              handleChange={handleChange}
              value={hike.date}
            />
            <label className="edit-hike-label">Trails:</label>
            <Input
              className="edit-hike-input"
              name="trails"
              id="trails"
              type="text"
              handleChange={handleChange}
              value={hike.trails}
            />
            <label className="edit-hike-label">Distance (miles):</label>
            <Input
              className="edit-hike-input"
              name="distance"
              id="distance"
              type="number"
              step="0.1"
              min="0"
              handleChange={handleChange}
              value={hike.distance}
            />
            <label className="edit-hike-label">Elevation (in feet):</label>
            <Input
              className="edit-hike-input"
              name="elevation"
              id="elevation"
              type="number"
              step="0.1"
              min="0"
              handleChange={handleChange}
              value={hike.elevation}
            />
            <label className="edit-hike-label">Time taken(HH:MM:SS):</label>
            <Input
              className="edit-hike-input"
              name="timeTaken"
              id="timeTaken"
              type="text"
              handleChange={handleChange}
              value={hike.timeTaken}
            />
            <label className="edit-hike-label">Mountains Climbed:</label>
            <Input
              className="edit-hike-input"
              name="mountainsClimbed"
              id="mountainsClimbed"
              type="text"
              handleChange={handleChange}
              value={hike.mountainsClimbed}
            />
            <label className="edit-hike-label">Who did you hike with?:</label>
            <Input
              className="edit-hike-input"
              name="hikedWith"
              type="text"
              handleChange={handleChange}
              value={hike.hikedWith}
            />
            {hike.picture && (
              <div className="hike-picture-container">
                <img className="hike-picture" src={hike.picture} alt={hike} />
              </div>
            )}
            <label className="edit-hike-label">Add/Replace picture:</label>
            <br />
            <input
              className="edit-hike-input"
              name="picture"
              type="file"
              onChange={onFileChange}
            />
            <br />
            <label className="edit-hike-label">Trail Notes:</label>
            <textarea
              className="edit-hike-textarea "
              name="trailNotes"
              onChange={handleChange}
              value={hike.trailNotes}
            />
            <input
              type="submit"
              className="edit-hike-button"
              value="Save Changes"
            />
            <ThemedButton
              className="delete-button"
              handleClick={(e) => {
                e.preventDefault();
                setDeleteShow(!deleteShow);
              }}
              message="Delete"
            />
          </form>
          <div className="delete-button-container">
            {deleteShow && (
              <>
                <ThemedButton
                  className="delete-button"
                  handleClick={deleteItem}
                  message="Confirm Delete!"
                />
                <ThemedButton
                  className="confirm-button"
                  handleClick={() => setDeleteShow(false)}
                  message="Cancel"
                />
              </>
            )}
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default EditModal;
