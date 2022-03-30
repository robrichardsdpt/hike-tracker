import "./hike-feed.styles.scss";

const HikeFeedCardRow = ({ label, text }) => {
  return (
    <div className="hike-information-row">
      <div className="hike-information-label">{label}</div>
      <div className="hike-information-data">{text}</div>
    </div>
  );
};

export default HikeFeedCardRow;
