import React, { useState, useEffect } from "react";
import axios from "axios";
import apiUrl from "../../apiConfig.js";
import HikeFeedCard from "./hike-feed-card";
import EditModal from "../edit-modal/edit-modal";
import SearchBar from "../search-bar/search-bar";
import { filterData } from "./helper";
import "./hike-feed.styles.scss";

const Feed = ({ user }) => {
  const [hikes, setHikes] = useState([]);
  const [hikeId, setHikeId] = useState();
  const [show, setShow] = useState(false);
  const [searchContents, setSearchContents] = useState("");

  const handleSearchContents = (event) => {
    setSearchContents(event.target.value);
  };

  const handleUpdateClick = (event) => {
    setHikeId(event.target.id);
    setShow(true);
  };
  const handleClose = () => setShow(false);

  useEffect(() => {
    axios({
      url: `${apiUrl}/hikes/`,
      method: "GET",
      params: {
        owner: "all",
      },
    }).then((res) => setHikes(res.data.hikes));
  }, [show]);

  const sortedFilterData = filterData(searchContents, hikes);
  const hikesJsx = sortedFilterData.map((hike) => {
    let profile = false;
    return (
      <div key={hike._id}>
        <HikeFeedCard
          hike={hike}
          user={user}
          profile={profile}
          setHikeId={setHikeId}
          handleUpdateClick={handleUpdateClick}
        />
      </div>
    );
  });
  return (
    <div>
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

export default Feed;
