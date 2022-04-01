import axios from "axios";
import React, { useState } from "react";
import apiUrl from "../../apiConfig.js";
import S3 from "react-aws-s3";
import { Redirect } from "react-router-dom";
import Input from "../input/input";
import "./create-hike.styles.scss";

const CreateHike = ({ user, msgAlert, updateCreatedHike }) => {
  const [newHike, setNewHike] = useState({});
  const [createdHike, setCreatedHike] = useState(false);

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
        setNewHike((prevPost) => {
          const updatedPost = { [event.target.name]: data.location };
          const editedPost = Object.assign({}, prevPost, updatedPost);
          return editedPost;
        })
      )
      .catch((err) => console.error(err));
  };

  const handleChange = (event) => {
    event.persist();
    setNewHike((prevPost) => {
      let inputData = event.target.value;
      const updatedPost = { [event.target.name]: inputData };
      const editedPost = Object.assign({}, prevPost, updatedPost);
      return editedPost;
    });
  };

  const onSubmitHike = (e) => {
    e.preventDefault();
    axios({
      url: `${apiUrl}/hikes/`,
      method: "POST",
      headers: {
        Authorization: `Token token=${user.token}`,
      },
      data: {
        hike: newHike,
      },
    })
      .then(() =>
        msgAlert({
          heading: "Hike Created!",
          variant: "success",
        })
      )
      .then(() => setNewHike({}))
      .then(() => updateCreatedHike())
      .then(() => setCreatedHike(true))
      .catch(() =>
        msgAlert({
          heading: "Unable to create hike!",
          variant: "failure",
        })
      );
  };

  return (
    <div className="create-hike-container">
      {createdHike && <Redirect to={"/home"} />}
      <form id="create-hike" onSubmit={onSubmitHike}>
        <h2 className="create-hike-title">Create a Hike</h2>
        <label className="create-hike-label">Date:</label>
        <Input
          className="create-hike-input"
          name="date"
          id="date"
          type="date"
          handleChange={handleChange}
          placeholder="When did you go?"
          value={newHike.date}
        />
        <label className="create-hike-label">Trails:</label>
        <Input
          className="create-hike-input"
          name="trails"
          id="trails"
          type="text"
          handleChange={handleChange}
          placeholder="What trails did you hit?"
          value={newHike.trails}
        />
        <label className="create-hike-label">Distance (miles):</label>
        <Input
          className="create-hike-input"
          name="distance"
          id="distance"
          type="number"
          step="0.1"
          min="0"
          handleChange={handleChange}
          placeholder="How far in miles?"
          value={newHike.distance}
        />
        <label className="create-hike-label">Elevation (in feet):</label>
        <Input
          className="create-hike-input"
          name="elevation"
          id="elevation"
          type="number"
          step="0.1"
          min="0"
          handleChange={handleChange}
          placeholder="How high in feet?"
          value={newHike.elevation}
        />
        <label className="create-hike-label">Time taken(HH:MM:SS):</label>
        <Input
          className="create-hike-input"
          name="timeTaken"
          id="timeTaken"
          type="text"
          handleChange={handleChange}
          placeholder="How long in HH:MM:SS?"
          value={newHike.timeTaken}
        />
        <label className="create-hike-label">Mountains Climbed:</label>
        <Input
          className="create-hike-input"
          name="mountainsClimbed"
          id="mountainsClimbed"
          type="text"
          handleChange={handleChange}
          placeholder="Which peaks?"
          value={newHike.mountainsClimbed}
        />
        <label className="create-hike-label">Who did you hike with?:</label>
        <Input
          className="create-hike-input"
          name="hikedWith"
          type="text"
          handleChange={handleChange}
          placeholder="Who'd you drag along?"
          value={newHike.hikedWith}
        />
        <label className="create-hike-label">Add a picture:</label>
        <br />
        <Input
          className="create-hike-input"
          name="picture"
          type="file"
          handleChange={onFileChange}
        />
        <label className="create-hike-label">Trail Notes:</label>
        <textarea
          className="create-hike-textarea"
          name="trailNotes"
          onChange={handleChange}
          placeholder="Any field notes?"
          value={newHike.trailNotes}
        />
        <button className="create-hike-button">Create Hike!</button>
      </form>
    </div>
  );
};

export default CreateHike;
