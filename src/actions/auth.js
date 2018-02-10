
import {
  firebase, googleAuthProvider
} from '../firebase/firebase'

export const startLogin = () => dispatch => {
    return firebase.auth().signInWithPopup(googleAuthProvider)
}

export const startLogout = () => dispatch => {
    return firebase.auth().signOut()
}
