import HikeFeedCardRow from "./hike-feed-card-row";
import "./hike-feed.styles.scss";
import NoPhoto from "../user-profile/no-photo-avail.jpg";
const HikeFeedCardData = ({ hike, profile }) => {
  return (
    <div className="hike-information-data-container">
      {profile === false && (
        <div className="hike-information-row">
          <div className="hike-information-label name-plate-label">HIKER:</div>
          <div className="hike-information-data name-plate">
            <div>
              {hike.owner.profileImage ? (
                <div className="feed-image-container">
                  <img
                    className="feed-image"
                    src={hike.owner.profileImage}
                    alt={"profile"}
                  />
                </div>
              ) : (
                <div className="feed-image-container">
                  <img
                    src={NoPhoto}
                    className="feed-image"
                    alt={"no-profile"}
                  />
                </div>
              )}
            </div>
            <div>{hike.owner.email}</div>
          </div>
        </div>
      )}
      <HikeFeedCardRow label="TRAIL:" text={hike.trails} />
      {hike.mountainsClimbed && (
        <HikeFeedCardRow label="SUMMITS:" text={hike.mountainsClimbed} />
      )}
      {hike.distance && (
        <HikeFeedCardRow label="DISTANCE:" text={hike.distance} />
      )}
      {hike.elevation && (
        <HikeFeedCardRow label="ELEVATION GAIN:" text={hike.elevation} />
      )}
      {hike.timeTaken && (
        <HikeFeedCardRow label="TIME TAKEN:" text={hike.timeTaken} />
      )}
      {hike.hikedWith && (
        <HikeFeedCardRow label="HIKED WITH:" text={hike.hikedWith} />
      )}
      {hike.trailNotes && (
        <HikeFeedCardRow label="TRAIL NOTES:" text={hike.trailNotes} />
      )}
    </div>
  );
};

export default HikeFeedCardData;
