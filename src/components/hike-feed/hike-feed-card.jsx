import React from "react";
import Moment from "react-moment";

import HikeFeedCardData from "./hike-feed-card-data";
import "./hike-feed.styles.scss";

const HikeFeedCard = ({ hike, user, profile, handleUpdateClick }) => {
  return (
    <div className="hike-card">
      <div className="date-title">
        <div>
          <h3>
            <Moment format="MM/DD/YYYY">{hike.date}</Moment>
          </h3>
        </div>
        <div>
          <h4>
            {" "}
            {hike.owner.email === user.email && (
              <div
                className="click-to-edit"
                id={hike._id}
                onClick={handleUpdateClick}
              >
                ...
              </div>
            )}
          </h4>
        </div>
      </div>
      {hike.picture && (
        <div className="hike-picture-container">
          <img className="hike-picture" src={hike.picture} alt={"hike"} />
        </div>
      )}
      <div className="hike-information">
        <HikeFeedCardData hike={hike} profile={profile} />
      </div>
    </div>
  );
};

export default HikeFeedCard;
