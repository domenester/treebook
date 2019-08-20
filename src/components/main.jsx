import * as React from "react"
import { Provider } from "react-redux" // eslint-disable-line no-unused-vars
import Home from "./routes/home/content" // eslint-disable-line no-unused-vars
import { AppConfig } from "../config"
import { BrowserRouter, Route, Redirect } from 'react-router-dom'
import LoggedInVerifier from '../components/logged-in-verifier/logged-in-verifier'
import Login from '../components/login/login'
import { combineReducers, createStore } from 'redux'
import 'bootstrap'

const reducers = combineReducers({
  any: () => ({})
});

document.title = AppConfig.title;

function renderComponent(component) {
  const fakeLogin = false;
  if (fakeLogin) return component;
  return <Redirect to="/login"/>
}

export default class Main extends React.Component{
  render() {
    return (
      <Provider store={createStore(reducers)}>
        <BrowserRouter>
          <Route exact path="/" render={ () => renderComponent( <Home/> ) }/>
          <Route path="/login" component={Login}/>
        </BrowserRouter>
      </Provider>
    )
  }
}
