import { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { deleteMountainsTable } from './../../hike-data/hike-data-functions'
import { signOut } from './auth-functions'
import messages from '../alerts/messages'

class SignOut extends Component {
  componentDidMount () {
    const { msgAlert, history, clearUser, user } = this.props
    signOut(user)
      .finally(() => msgAlert({
        heading: 'Signed Out Successfully',
        message: messages.signOutSuccess,
        variant: 'success'
      }))
      .finally(() => history.push('/'))
      .finally(() => clearUser())
  }

  render () {
    deleteMountainsTable()
    return ''
  }
}

export default withRouter(SignOut)