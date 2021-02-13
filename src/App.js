import React, { useState, Fragment } from 'react'
import { Route } from 'react-router-dom'

import AuthenticatedRoute from './components/authenticated-route/authenticated-route'
import AutoDismissAlert from './components/alerts/auto-dismiss-alert.jsx'
import NavBar from './components/nav-bar/nav-bar'
import SignUp from './components/auth/sign-up'
import SignIn from './components/auth/sign-in'
import SignOut from './components/auth/sign-out'
import ChangePassword from './components/auth/change-password'
import Home from './components/home/home'
import CreateHike from './components/create-hike/create-hike'

const App = () => {
  const [user, setUser] = useState(null)
  const [msgAlerts, setMsgAlerts] = useState([])

  const clearUser = () => setUser(null)

  const msgAlert = ({ heading, message, variant }) => {
    setMsgAlerts([...msgAlerts, { heading, message, variant }])
  }

  return (
    <Fragment>
      <NavBar user={user} />
      <main>
        <Route path='/sign-up' render={() => (
          <SignUp msgAlert={msgAlert} setUser={setUser} />
        )} />
        <Route path='/sign-in' render={() => (
          <SignIn msgAlert={msgAlert} setUser={setUser} />
        )} />
        <AuthenticatedRoute user={user} path='/home' render={() => (
          <Home msgAlert={msgAlert} clearUser={clearUser} user={user} />
        )} />
        <AuthenticatedRoute user={user} path='/create' render={() => (
          <CreateHike msgAlert={msgAlert} user={user} />
        )} />
        <AuthenticatedRoute user={user} path='/sign-out' render={() => (
          <SignOut msgAlert={msgAlert} clearUser={clearUser} user={user} />
        )} />
        <AuthenticatedRoute user={user} path='/change-password' render={() => (
          <ChangePassword msgAlert={msgAlert} user={user} />
          )} />
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
  )
}

export default App
