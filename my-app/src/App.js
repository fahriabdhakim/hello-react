import React, {Component} from 'react';
import './App.css';
import {Grid} from 'semantic-ui-react'
import Profile from "./components/profile"
import NavBar from "./components/NavBar"

import { BrowserRouter as Router, Route, Link } from "react-router-dom"

import Home from "./pages/Home"
import Shoes from "./pages/Shoes"

import Header from "./components/Header"

export default class App extends Component {
  render() {
    return (<div className="App">

      <header className="App-header">
        <h1 className="App-title">BLACKMARKET.CO.ID</h1>
        <NavBar className="Nav-Bar"/>
      </header>
      <br/>
      <div>
        <Shoes/>
      </div>
    </div>)
  }
}
