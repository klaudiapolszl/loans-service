import React from "react"
import { Redirect } from "react-router"
import { connect } from "react-redux"

class RedirectPage extends React.Component {
  render() {
    return (
      <div>
        { this.props.isLogIn
          ? (<Redirect to={ `/${ this.props.page }` } />)
          : (<Redirect to="/"/>)
        }
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    isLogIn: state.isLogIn
  }
}

export default connect(
  mapStateToProps
)(RedirectPage)
