import React from "react"
import { Router, Switch, Route } from "react-router-dom"
import Dashboard  from "./components/dashboard/Dashboard.js"
import Login  from "./components/Login.js"
import history from './components/history'
import PageNotFound from './components/PageNotFound'

const App = () => {
  return (
    <Router history={ history }>
      <Switch>
        <Route exact path="/dashboard" component={ Dashboard }/>
        <Route exact path="/" component={ Login }/>
        <Route component={ PageNotFound }/>
      </Switch>
    </Router>
  )
}

export default App
