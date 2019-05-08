import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Login from './components/Login.js'
import Home from './components/Home.js'

// Scripts
//import 'jquery/dist/jquery.min.js';
//import 'popper.js/dist/popper.min.js';
//import 'bootstrap/dist/js/bootstrap.min.js';
// Styles
//import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import fire from './config/Fire.js';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      HomeButtonNews: <button> NEWS </button>,
      HomeButtonCalendar: <button> Calendar </button>,
      user:{}
    }    
  }

  componentDidMount(){
    this.authListener();
  }

  authListener() {
    fire.auth().onAuthStateChanged((user) => {
      console.log(user);
      if(user) {
        this.setState({user});
        localStorage.setItem('user', user.uid);
      } else {
        this.setState({user:null})
      }
    })
  }

  render() {  
    return (
      <React.Fragment>
    {this.state.user ? (<Home />) : (<Login/>)}
      </React.Fragment>      
    );
  }
}

export default App;
