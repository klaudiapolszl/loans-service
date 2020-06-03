import React from "react"
import { connect } from "react-redux"
import { getClients } from "../../services/clientServices"
import ClientRow from "./ClientRow"
import DeleteModal from "./DeleteModal"
import EditModal from "./EditModal"
import ContactsFilter from "./ContactsFilter"

class Clients extends React.Component {
  componentDidMount() {
    this.props.getClients()
  }

  render() {
    return (
      <div className="clients">
        <section className="card">
          <ContactsFilter />
          <div className="table-wrapper">
            <table className="table is-fullwidth">
              <thead>
                <tr>
                  <th>Loan code</th>
                  <th>Date</th>
                  <th>Name and surname</th>
                  <th>Amount</th>
                  <th>Courier's name</th>
                  <th>Repayment Date</th>
                  <th colSpan="2">Action</th>
                </tr>
              </thead>
              <tbody>
                { (this.props.foundClient && !this.props.allClients)
                    ? <ClientRow key={ this.props.foundClient.id } client={ this.props.foundClient } indexClient={ this.props.foundClientIndex } />
                    : (this.props.clients.map((client,index) => {
                      return (<ClientRow key={ client.id } client={ client } indexClient={ index } />)
                    }))
                }
              </tbody>
            </table>
          </div>
        </section>
        { (this.props.deleteModal)
            ? ((this.props.foundClient)
              ? <DeleteModal idClient={this.props.foundClient.id} name={ this.props.foundClient.nameAndSurname }/>
              : <DeleteModal idClient={this.props.idClient} name={ this.props.clients[this.props.index].nameAndSurname }/>
            )
            : ""
        }
        { (this.props.editModal && this.props.clients.length)
            ? ((this.props.foundClient)
              ? <EditModal idClient={ this.props.foundClient.id } client={ this.props.foundClient }/>
              : <EditModal idClient={ this.props.idClient } client={ this.props.clients[this.props.index] } />
            )
            : ""
        }
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    clients: state.clients,
    deleteModal: state.deleteModal,
    idClient: state.idClient,
    editModal: state.editModal,
    index: state.index,
    foundClient: state.foundClient,
    foundClientIndex: state.foundClientIndex,
    allClients: state.allClients
  }
}

const mapDispatchToProps = {
  getClients
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Clients)
