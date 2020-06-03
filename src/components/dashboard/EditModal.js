import React from "react";
import { connect } from "react-redux"
import { firestore } from "../Firebase.js"
import { editModalClose, editClient } from "../../services/clientServices"
import FormField from "./FormField"

class EditModal extends React.Component {
handleEditCollection() {
  this.props.editClient(this.props.idClient, this.props.inputName, this.props.inputValue)
  this.props.editModalClose()
}

handleEditModalClose() {
  this.props.editModalClose()
}

render(){
  return (
    <div className="modal is-block">
      <div className="modal-background modal-background--edit"></div>
      <div className="modal-card">
        <header className="modal-card-head">
          <p className="modal-edit__title">Edit information about the client</p>
          <button onClick={ () => this.handleEditModalClose() } className="modal-close is-large" aria-label="close"></button>
        </header>
        <section className="modal-card-body">
          <FormField label="Loan code" icon="fas fa-money-check-alt" type="number" name="number" value={ this.props.client.number } />
          <FormField label="Date" icon="fas fa-calendar-alt" type="date" name="date" value={ this.props.client.date } />
          <FormField label="Name and surname" icon="fas fa-user" type="text" name="nameAndSurname" value={ this.props.client.nameAndSurname } />
          <FormField label="Amount" icon="fas fa-coins" type="number" name="amount" value={ this.props.client.amount } />
          <FormField label="Courier's name" icon="fas fa-address-card" type="text" name="courier" value={ this.props.client.courier } />
          <FormField label="Repayment Date" icon="fas fa-calendar-times" type="date" name="repaymentDate" value={ this.props.client.repaymentDate } />
        </section>
        <footer className="modal-card-foot">
          <div className="modal__buttons">
            <button onClick={ () => this.handleEditModalClose() } className="button button--back">BACK</button>
            <button onClick={ () => this.handleEditCollection() } className="button button--blue">UPDATE</button>
          </div>
        </footer>
      </div>
    </div>
  )}
}

function mapStateToProps(state) {
  return {
    inputName: state.inputName,
    inputValue: state.inputValue
  }
}

const mapDispatchToProps = {
  editModalClose,
  editClient
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditModal)
