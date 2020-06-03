import React from "react"
import { connect } from "react-redux"
import { selectedClientToDelete, selectedClientToEdit } from "../../services/clientServices"

class ClientRow extends React.Component {
  handleDeleteClient = (id,index) => {
    this.props.selectedClientToDelete(id, index)
  }

  handleEditClient = (id,index) => {
    this.props.selectedClientToEdit(id,index)
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

const mapDispatchToProps = {
  selectedClientToDelete,
  selectedClientToEdit
}

export default connect(
  null,
  mapDispatchToProps
)(ClientRow)
