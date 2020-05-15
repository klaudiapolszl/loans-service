import { firestore } from "../components/Firebase.js"

export function getClients() {
  return function(dispatch) {
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
export function deleteClient(id,index) {
  return function(dispatch) {
    dispatch({ type: "SET_DELETE_MODAL", deleteModal: true })
    dispatch({ type: "SET_CLIENT_ID", idClient: id })
    dispatch({ type: "SET_CLIENT_INDEX", index: index })
  }
}
export function deleteModalClose() {
  return function(dispatch) {
    dispatch({ type: "SET_DELETE_MODAL", deleteModal: false })
  }
}
export function editClient(id, index) {
  return function(dispatch) {
    dispatch({ type: "SET_EDIT_MODAL", editModal: true })
    dispatch({ type: "SET_CLIENT_ID", idClient: id })
    dispatch({ type: "SET_CLIENT_INDEX", index: index })
  }
}
export function editModalClose() {
  return function(dispatch) {
    dispatch({ type: "SET_EDIT_MODAL", editModal: false })
  }
}
export function changeInputValue(name,value) {
  return function(dispatch) {
    dispatch({ type: "SET_INPUT_NAME", inputName: name })
    dispatch({ type: "SET_INPUT_VALUE", inputValue: value })
  }
}
export function getFoundClient(client,index,input) {
  return function(dispatch) {
    dispatch({ type: "SET_FOUND_CLIENT", foundClient: client })
    dispatch({ type: "SET_FOUND_CLIENT_INDEX", foundClientIndex: client,index })
    dispatch({ type: "SET_SEARCH_CLIENT_INPUT", searchClientInput: input })
    dispatch({ type: "SET_ALL_CLIENTS", allClients: false })
  }
}
export function getAllClients() {
  return function(dispatch) {
    dispatch({ type: "SET_ALL_CLIENTS", allClients: true })
  }
}
