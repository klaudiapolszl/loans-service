import React from "react"
import { connect } from "react-redux"
import { deleteClient, editClient } from "../../services/clientServices"

class ClientRow extends React.Component {
  handleDeleteClient = (id,index) => {
    this.props.deleteClient(id, index)
  }

  handleEditClient = (id,index) => {
    this.props.editClient(id,index)
  }

  render() {
    return (
      <tr>
        <td>{ this.props.client.number }</td>
        <td>{ this.props.client.date }</td>
        <td>{ this.props.client.nameAndSurname }</td>
        <td>{ this.props.client.amount } zł</td>
        <td>{ this.props.client.courier }</td>
        <td>{ this.props.client.repaymentDate }</td>
        <td>
          <button className="button button--blue" onClick={ () => this.handleEditClient(this.props.client.id, this.props.indexClient) }>EDIT</button>
        </td>
        <td>
          <button className="button button--pink" onClick={ () => this.handleDeleteClient(this.props.client.id, this.props.indexClient) }>DELETE</button>
        </td>
      </tr>
    )
  }
}

export default connect(
  null,
  { deleteClient, editClient }
)(ClientRow)
