import React from "react";
import "./landing.styles.scss";

const Landing = () => {
  return (
    <div className="landing__container">
      <h1 className="landing__title">
        Welcome to your premier New England hike tracker!
      </h1>
      <div className="landing__subtitle">
        Sign up/in to start tracking your hikes and collecting patches!
      </div>
    </div>
  );
};

export default Landing;
