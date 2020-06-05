import React from "react"
import { connect } from "react-redux";
import { getFoundClient, getAllClients } from "../../services/clientServices"

class ContactsFilter extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      searchInput: ""
    }
  }

  handleChange = (e) => {
    this.setState({
      searchInput: e.target.value
    })
  }

  handleFilteredClient = () => {
    this.props.getFoundClient(this.props.clients,this.state.searchInput)
  }

  handleAllClients = () => {
    this.props.getAllClients()
  }

  render() {
    return (
      <div className="field search__field">
        <label className="label search__label">Search client by his name or surname</label>
        <div className="control has-icons-left has-icons-right search__control">
          <input className="input" type="text" name="search" placeholder="Search..." onChange={ (e) => this.handleChange(e) } />
          <span className="icon is-small is-left">
            <i className="fas fa-search"></i>
          </span>
        </div>
        <div className="search__buttons">
          <button className="button search__button button--blue" onClick={ () => this.handleFilteredClient() }>SEARCH</button>
          <button className="button search__button button--blue" onClick={ () => this.handleAllClients() }>ALL CLIENTS</button>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    clients: state.clients
  }
}

const mapDispatchToProps = {
  getFoundClient,
  getAllClients
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ContactsFilter)
