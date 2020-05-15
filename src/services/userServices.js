import { auth } from "../components/Firebase.js"
import history from "../components/history"

export default function getUser() {
  return function(dispatch) {
    auth.onAuthStateChanged((user) => {
      if (user) {
        dispatch({ type: "SET_USER", user: user })
        dispatch({type: "SET_LOGIN", isLogIn: true })
        history.push('/dashboard')
      } else {
        dispatch({ type: "SET_USER", user: "" })
        dispatch({ type: "SET_LOGIN", isLogIn: false })
      }
    })
  }
}
export function signOutUser() {
  return function() {
    auth.signOut()
  }
}
export function signInUser(email, password) {
  return function() {
    auth
      .signInWithEmailAndPassword(email, password)
      .catch((error) =>
        alert(
          `Your email or password is incorrect, please check your data, ${error}`
        )
    )
  }
}
export function signUpUser(email, password) {
  return function() {
    auth
      .createUserWithEmailAndPassword(email, password)
      .catch((error) =>
          alert(`Email is already in use, sign in or use other email, ${error}`)
      )
  }
}
