import React, { createContext,useReducer } from 'react'
import {Route, } from 'react-router-dom'
import Navbar from './components/Navbar'
import About from './components/About'
import Home from './components/Home'
import Contact from './components/Contact'
import Login from './components/Login'
import Signup from './components/Signup'
import Logout from './components/Logout'
import ErrorPage from './components/ErrorPage'
import { Switch } from 'react-router-dom';
import "./App.css"
import "../src/css/Login.css"
import "../src/css/Registration.css"
import "../src/css/Home.css"
import "../src/css/Navbar.css"
import { initialState, reducer } from '../src/reducer/UseReducer'
// 1: context api
export const UserContext = createContext()

const Routing = () =>{
  return(
    <Switch>
    <Route exact path="/">
      <Home></Home>
    </Route>

    <Route  path="/About">
      <About></About>
    </Route>
    
    <Route  path="/Login">
      <Login></Login>
    </Route>
    
    <Route  path="/Contact">
      <Contact></Contact>
    </Route>

    <Route  path="/Signup">
      <Signup></Signup>
    </Route>

    <Route  path="/Logout">
      <Logout></Logout>
    </Route>
    
    <Route path="" component={ErrorPage}>
      </Route> 
    
    </Switch>
  )
}

export const App = () => {
const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <>
    <UserContext.Provider value={{state, dispatch}}>
      <Navbar/>
     <Routing/>
      </UserContext.Provider>
    </>
  )
}

export default App
