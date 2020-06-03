import { auth } from "../components/Firebase.js"
import history from "../components/history"

export const getUser = () => {
  return (dispatch) => {
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

export const signOutUser = () => {
  return () => {
    auth.signOut()
  }
}

export const signInUser = (email, password) => {
  return () => {
    auth
      .signInWithEmailAndPassword(email, password)
      .catch((error) =>
        alert(
          `Your email or password is incorrect, please check your data, ${error}`
        )
    )
  }
}

export const signUpUser = (email, password) => {
  return () => {
    auth
      .createUserWithEmailAndPassword(email, password)
      .catch((error) =>
          alert(`Email is already in use, sign in or use other email, ${error}`)
      )
  }
}
