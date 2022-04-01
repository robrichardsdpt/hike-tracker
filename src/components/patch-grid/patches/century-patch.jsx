import React from "react";
import CenPatch from "../../../ne67.jpg";
import ProgressChart from "../stat-chart";

const CenturyPatch = ({ totalDistance }) => {
  return (
    <div className="patch-card">
      <h2>Century Patch</h2>
      {totalDistance >= 100 && (
        <div className="patch-image-container">
          <img src={CenPatch} className="patch-image" alt="patch" />
        </div>
      )}
      {totalDistance !== 100 && (
        <ProgressChart completed={totalDistance} total={100} />
      )}
      {Math.floor((totalDistance / 100) * 100)}% completed!
      {totalDistance !== 100 && (
        <div>You have {100 - totalDistance} to go.</div>
      )}
      Keep hiking!
    </div>
  );
};

export default CenturyPatch;
