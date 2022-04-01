import React, { useState, Fragment } from "react";
import { Route } from "react-router-dom";

import AuthenticatedRoute from "./components/authenticated-route/authenticated-route";
import AutoDismissAlert from "./components/alerts/auto-dismiss-alert.jsx";
import NavBar from "./components/nav-bar/nav-bar";
import Landing from "./components/landing/landing";
import SignUp from "./components/auth/sign-up";
import SignIn from "./components/auth/sign-in";
import SignOut from "./components/auth/sign-out";
import ChangePassword from "./components/auth/change-password";
import Home from "./components/home/home";
import CreateHike from "./components/create-hike/create-hike";
import UserProfile from "./components/user-profile/user-profile";
import Fallroad from "./Fallroad.jpg";
import Presidentials from "./Presidentials.jpg";
import Waterfall from "./Waterfall.jpg";
import HuntingtonRavine from "./huntingtonravine.jpg";
import LincolnWoods from "./lincolnwoods.jpg";
import Rainbow from "./rainbow.jpg";
import Trail from "./trail.jpg";
import WashingtonCrawford from "./washingtoncrawford.jpg";
import River from "./river.jpg";
import SunrisePemi from "./sunrisepemi.jpg";
import WinterWhites from "./winterwhites.jpg";
import BlueWinter from "./bluewinter.jpg";

const App = () => {
  const [user, setUser] = useState(null);
  const [msgAlerts, setMsgAlerts] = useState([]);
  const [createdHike, setCreatedHike] = useState(0);

  const updateCreatedHike = () => setCreatedHike(createdHike + 1);
  const clearUser = () => setUser(null);

  const msgAlert = ({ heading, message, variant }) => {
    setMsgAlerts([...msgAlerts, { heading, message, variant }]);
  };
  const handleUserImageChange = (url) => {
    setUser((prevPost) => {
      const updatedPost = { profileImage: url };
      const editedPost = Object.assign({}, prevPost, updatedPost);
      return editedPost;
    });
  };

  const backgroundArray = [
    Presidentials,
    Fallroad,
    Waterfall,
    HuntingtonRavine,
    LincolnWoods,
    Rainbow,
    Trail,
    WashingtonCrawford,
    River,
    WinterWhites,
    BlueWinter,
    River,
    SunrisePemi,
  ];
  const randomBG = Math.floor(Math.random() * backgroundArray.length);
  const background = {
    backgroundImage: `url(${backgroundArray[randomBG]})`,
    height: "90vh",
    margin: "0 auto",
    overflow: "scroll",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    width: "100%",
  };
  return (
    <Fragment>
      <NavBar user={user} />
      <main style={background}>
        <Route exact path="/" render={() => <Landing />} />
        <Route
          path="/sign-up"
          render={() => <SignUp msgAlert={msgAlert} setUser={setUser} />}
        />
        <Route
          path="/sign-in"
          render={() => <SignIn msgAlert={msgAlert} setUser={setUser} />}
        />
        <AuthenticatedRoute
          user={user}
          path="/home"
          render={() => (
            <Home msgAlert={msgAlert} clearUser={clearUser} user={user} />
          )}
        />
        <AuthenticatedRoute
          user={user}
          path="/create"
          render={() => (
            <CreateHike
              msgAlert={msgAlert}
              user={user}
              updateCreatedHike={updateCreatedHike}
            />
          )}
        />
        <AuthenticatedRoute
          user={user}
          path="/sign-out"
          render={() => (
            <SignOut msgAlert={msgAlert} clearUser={clearUser} user={user} />
          )}
        />
        <AuthenticatedRoute
          user={user}
          path="/change-password"
          render={() => <ChangePassword msgAlert={msgAlert} user={user} />}
        />
        <AuthenticatedRoute
          user={user}
          path="/profile"
          render={() => (
            <UserProfile
              user={user}
              handleUserImageChange={handleUserImageChange}
              createdHike={createdHike}
            />
          )}
        />
        {msgAlerts.map((msgAlert, index) => (
          <AutoDismissAlert
            key={index}
            heading={msgAlert.heading}
            variant={msgAlert.variant}
            message={msgAlert.message}
          />
        ))}
      </main>
    </Fragment>
  );
};

export default App;
