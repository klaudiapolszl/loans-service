import { createStore, applyMiddleware, compose } from "redux"
import thunk from "redux-thunk"
const initialState = {
  user: "",
  isLogIn: false,
  clients: [],
  deleteModal: false,
  idClient: "",
  editModal: false,
  index: "",
  inputValue: "",
  inputName: "",
  foundClient: "",
  foundClientIndex: "",
  allClients: false
}

const storeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case "SET_USER" :
        return { ...state, user: action.user }
    case "SET_LOGIN" :
        return { ...state, isLogIn: action.isLogIn }
    case "SET_CLIENTS" :
        return { ...state, clients: action.clients }
    case "SET_DELETE_MODAL" :
        return { ...state, deleteModal: action.deleteModal }
    case "SET_CLIENT_ID" :
        return { ...state, idClient: action.idClient }
    case "SET_EDIT_MODAL" :
        return { ...state, editModal: action.editModal }
    case "SET_CLIENT_INDEX" :
        return { ...state, index: action.index }
    case "SET_INPUT_VALUE" :
        return { ...state, inputValue: action.inputValue }
    case "SET_INPUT_NAME" :
        return { ...state, inputName: action.inputName }
    case "SET_FOUND_CLIENT" :
        return { ...state, foundClient: action.foundClient }
    case "SET_FOUND_CLIENT_INDEX" :
        return { ...state, foundClientIndex: action.foundClientIndex }
    case "SET_ALL_CLIENTS" :
        return { ...state, allClients: action.allClients }
    default:
        return state
  }
}

const store = createStore(
  rootReducer,
  storeEnhancers(applyMiddleware(thunk))
)

export default store
