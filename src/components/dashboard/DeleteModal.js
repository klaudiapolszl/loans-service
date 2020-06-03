import React from "react";
import { connect } from "react-redux"
import { firestore } from "../Firebase.js"
import { deleteModalClose, deleteClient } from "../../services/clientServices"

class DeleteModal extends React.Component {
  handleDeleteCollection() {
    this.props.deleteClient(this.props.idClient)
    this.props.deleteModalClose()
  }

  handleDeleteModalClose() {
    this.props.deleteModalClose()
  }

  render(){
    return (
      <div className="modal is-block">
        <div className="modal-background modal-background--delete"></div>
        <div className="modal-content">
          <div className="box">
              <p className="modal__title">Confirm the removal of the client: { this.props.name }</p>
              <div className="modal__buttons">
                <button onClick={ () => this.handleDeleteModalClose() } className="button button--back">BACK</button>
                <button onClick={ () => this.handleDeleteCollection() } className="button button--pink">DELETE</button>
              </div>
            </div>
          </div>
          <button onClick={ () => this.handleDeleteModalClose() } className="modal-close is-large" aria-label="close"></button>
      </div>
    );
  }
};

const mapDispatchToProps = {
  deleteModalClose,
  deleteClient
}

export default connect(
  null,
  mapDispatchToProps
)(DeleteModal)
