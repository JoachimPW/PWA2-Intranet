import React, { Component } from 'react';
import News from "./components/News.js";
import Calendar from "./components/Calendar.js"
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
      /*<Router>
        <React.Fragment>
          <Switch>
            <Route exact path={"/"}

              render={(props) =>

                <div id="front-wrapper">
                  <h1>Kindergarten App</h1>
                  <img src="~/imageslogo.jpg" alt="Kindergarten Logo" />
                  <button className="btn btn-primary center-block"> News </button>
                  <button className="btn btn-primary center-block"> Calendar </button>
                </div>
              }
            />
            <Route exact path={"/News"}
              render={(props) =>
                <React.Fragment>
                  <News {...props} />
                </React.Fragment>}

            />

            <Route exact path={"/Calendar"}
              render={(props) =>
                <React.Fragment>
                  <Calendar {...props} />
                </React.Fragment>}

            />
          </Switch>
        </React.Fragment>
      </Router> */
    );
  }
}

export default App;
