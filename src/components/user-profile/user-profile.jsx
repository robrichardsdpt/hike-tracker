import React, { useState, useEffect } from "react";
import apiUrl from "./../../apiConfig.js";
import HikeFeedCard from "../hike-feed/hike-feed-card";
import UserInfo from "./user-info";
import axios from "axios";

import EditModal from "../edit-modal/edit-modal.jsx";
import SearchBar from "../search-bar/search-bar.jsx";
import { filterData } from "../../hike-data/helper.js";
import "./user-profile.styles.scss";

const UserProfile = ({ user, handleUserImageChange, createdHike }) => {
  const [hikes, setHikes] = useState([]);
  const [hikeId, setHikeId] = useState();
  const [show, setShow] = useState(false);
  const [searchContents, setSearchContents] = useState("");

  const handleUpdateClick = (event) => {
    setHikeId(event.target.id);
    setShow(true);
  };
  const handleClose = () => setShow(false);

  const handleSearchContents = (event) => {
    setSearchContents(event.target.value);
  };

  useEffect(() => {
    axios({
      url: `${apiUrl}/hikes/`,
      method: "GET",
      params: {
        owner: user._id,
      },
    }).then((res) => setHikes(res.data.hikes));
  }, [show, createdHike, user._id]);

  const sortedFilterData = filterData(searchContents, hikes);

  const hikesJsx = sortedFilterData.map((hike) => {
    return (
      <div key={hike._id}>
        <HikeFeedCard
          hike={hike}
          user={user}
          profile={true}
          handleUpdateClick={handleUpdateClick}
        />
      </div>
    );
  });
  return (
    <div className="profile-container">
      <div className="profile-info">
        <UserInfo
          user={user}
          hikes={hikes}
          handleUserImageChange={handleUserImageChange}
          createdHike={createdHike}
        />
      </div>
      <div className="search-container">
        <SearchBar handleSearchContents={handleSearchContents} />
      </div>
      <div className="hike-feed">
        <div className="hike-grid">{hikesJsx}</div>
        {hikeId && (
          <EditModal
            show={show}
            handleClose={handleClose}
            setHikeId={setHikeId}
            hikeId={hikeId}
            user={user}
          />
        )}
      </div>
    </div>
  );
};

export default UserProfile;
