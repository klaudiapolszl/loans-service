import React from "react"
import history from "../history"
import { connect } from "react-redux"
import { signOutUser } from "../../services/userServices"
import RedirectPage from "../RedirectPage.js"
import Clients from "./Clients.js"

class Dashboard extends React.Component {
  handleSignOut = () => {
    this.props.signOutUser()
    history.push("/")
  }

  render() {
    return (
      <div>
        <div className="dashboard__top-menu">
          <p className="dashboard__email">Loggin as: { this.props.user.email }</p>
          <button onClick={ (e) => this.handleSignOut(e) } className="button logout__button button--navy">LOG OUT</button>
        </div>
        <Clients />
        <RedirectPage page="dashboard" />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user
  }
}

const mapDispatchToProps = {
  signOutUser
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Dashboard)
