import { firestore } from "../components/Firebase.js"

export const getClients = () => {
  return (dispatch) => {
    const creatorsCollection = firestore.collection("clients")
    const documentsCollection = doc => {
      return { id: doc.id, ...doc.data() }
    }
    const subscribe = creatorsCollection.onSnapshot(snapshot => {
      const dataFromCollection = snapshot.docs.map(documentsCollection)
      dispatch({ type: "SET_CLIENTS", clients: dataFromCollection })
    })
    return () => subscribe
  }
}

export const selectedClientToDelete = (id,index) => {
  return (dispatch) => {
    dispatch({ type: "SET_DELETE_MODAL", deleteModal: true })
    dispatch({ type: "SET_CLIENT_ID", idClient: id })
    dispatch({ type: "SET_CLIENT_INDEX", index: index })
  }
}

export const deleteClient = (id) => {
  return () => {
    const creatorsCollection = firestore.collection("clients")
    creatorsCollection.doc(id).delete()
      .then(response => {})
      .catch(error => {
          console.log(error.message)
      })
  }
}

export const deleteModalClose = () => {
  return (dispatch) => {
    dispatch({ type: "SET_DELETE_MODAL", deleteModal: false })
  }
}

export const selectedClientToEdit = (id, index) => {
  return (dispatch) => {
    dispatch({ type: "SET_EDIT_MODAL", editModal: true })
    dispatch({ type: "SET_CLIENT_ID", idClient: id })
    dispatch({ type: "SET_CLIENT_INDEX", index: index })
  }
}

export const editClient = (id, inputName, inputValue) => {
  return () => {
    const creatorsCollection = firestore.collection("clients")
    creatorsCollection.doc(id).update({
      [inputName]: inputValue
    })
    .then(function() {
      console.log("Document successfully updated!")
    })
    .catch(function(error) {
      console.error("Error updating document: ", error)
    })
  }
}

export const editModalClose = () => {
  return (dispatch) => {
    dispatch({ type: "SET_EDIT_MODAL", editModal: false })
  }
}

export const changeInputValue = (name,value) => {
  return (dispatch) => {
    dispatch({ type: "SET_INPUT_NAME", inputName: name })
    dispatch({ type: "SET_INPUT_VALUE", inputValue: value })
  }
}

export const getFoundClient = (client,index,input) => {
  return (dispatch) => {
    dispatch({ type: "SET_FOUND_CLIENT", foundClient: client })
    dispatch({ type: "SET_FOUND_CLIENT_INDEX", foundClientIndex: client,index })
    dispatch({ type: "SET_SEARCH_CLIENT_INPUT", searchClientInput: input })
    dispatch({ type: "SET_ALL_CLIENTS", allClients: false })
  }
}

export const getAllClients = () => {
  return (dispatch) => {
    dispatch({ type: "SET_ALL_CLIENTS", allClients: true })
  }
}
