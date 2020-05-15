import React from "react"
import { connect } from "react-redux"
import getUser, { signInUser, signUpUser } from "../services/userServices"

class Login extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      email: "",
      password: ""
    }
  }

  componentDidMount() {
    this.props.getUser()
  }

  handleChange = (e) => {
    this.setState( {
        [e.target.name]: e.target.value
      }
    )
  }

  handleSignIn = (e) => {
    e.preventDefault()
    this.props.signInUser(this.state.email,this.state.password)
  }

  handleSignUp = (e) => {
    e.preventDefault()
    this.props.signUpUser(this.state.email,this.state.password)
  }

  render() {
    return (
      <section className="wrapper">
        <form className="form box">
          <div className="field">
            <label className="label" htmlFor="email-input">Email</label>
            <div className="control">
              <p className="control has-icons-left has-icons-right">
                <input placeholder="jondoe@gmail.com" className="input" id="email-input" type="email"
                   name="email" onChange={ (e) => this.handleChange(e) } value={ this.state.email } required />
                  <span className="icon is-small is-left">
                    <i className="fas fa-envelope"></i>
                  </span>
                </p>
              </div>
            </div>
            <div className="field">
              <label className="label" htmlFor="password-input">Password</label>
              <div className="control">
                <p className="control has-icons-left">
                  <input placeholder="********" className="input" type="password" name="password" id="password-input"
                     onChange={ (e) => this.handleChange(e) } value={ this.state.password } required />
                  <span className="icon is-small is-left">
                  <i className="fas fa-lock"></i>
                </span>
                </p>
              </div>
            </div>
            <div className="buttons-wrapper">
              <button className="button button--blue" type="submit" name="sign in" onClick={ (e) => this.handleSignIn(e) }>
                Sign In
              </button>
              <button className="button button--pink" type="submit" name="register" onClick={ (e) => this.handleSignUp(e) }>
                Register
              </button>
            </div>
          </form>
      </section>
    )
  }
}

export default connect(
  null,
  { getUser, signInUser, signUpUser }
)(Login)
