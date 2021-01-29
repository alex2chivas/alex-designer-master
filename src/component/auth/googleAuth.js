import React from 'react'
import { connect } from 'react-redux'
import withFirebaseAuth from 'react-with-firebase-auth'
import { compose } from 'redux'

import history from '../../history'
import { firebaseAppAuth, providers } from '../../config/fbConfig'
import Spinner from '../react-bootstrap/Spinner'

const GoogleAuth = React.memo(props => {
  const { signOut, signInWithGoogle } = props

  const onSignInClick = async () => {
    await signInWithGoogle()

    return history.push('/design/collection')
  }

  const onSignOutClick = () => {
    return signOut()
  }

  const renderAuthButton = () => {
    if (props.signInStatus === null) {
      return <Spinner />
    } else if (props.signInStatus) {
      return (
        <button
          onClick={onSignOutClick}
          style={{ color: 'blue' }}
          className='button-looks-like-link'
        >
          Alejandra
        </button>
      )
    } else if (props.type === 'LOGIN') {
      return (
        <button
          onClick={onSignInClick}
          style={{ color: 'red' }}
          className='button-looks-like-link'
        >
          <h1>Alejandra</h1>
        </button>
      )
    } else {
      return <div style={{ color: 'white' }}>Alejandra</div>
    }
  }

  return <React.Fragment>{renderAuthButton()}</React.Fragment>
})

const mapStateToProps = state => {
  return { signInStatus: state.firebase.auth.uid }
}

export default compose(
  connect(mapStateToProps),
  withFirebaseAuth({ firebaseAppAuth, providers })
)(GoogleAuth)
