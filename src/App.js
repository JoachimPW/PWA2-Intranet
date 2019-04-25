import React, { Component } from 'react';
import News from "./components/News.js";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

// Scripts
//import 'jquery/dist/jquery.min.js';
//import 'popper.js/dist/popper.min.js';
//import 'bootstrap/dist/js/bootstrap.min.js';
// Styles
//import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import HeaderInclude from './header.js';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
    HomeButtonNews: <button> NEWS </button>,
    HomeButtonCalendar: <button> Calendar </button>
  }
}
  render() {
    return (
     <Router>
       <React.Fragment>
        <Switch>
          <Route exact path={"/"}
          
          render = {(props) => 
            <div className="row">
          <div className = "form-group">
            <div className = "d-flex justify-content-center">
             <button className = "btn btn-primary center-block"> News </button>
              <br></br>
              <button className = "btn btn-primary center-block"> Calendar </button>
            </div>
          </div>
          </div>}         
          />
            <Route exact path={"/News"} 
            render={(props) =>
            <React.Fragment>
              <News {...props}/>
            </React.Fragment> }
            />
        </Switch>
        </React.Fragment>
      </Router>
    );
  }
}

export default App;
