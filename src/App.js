import React, { Component } from 'react';
import News from "./components/News.js";
import Calendar from "./components/Calendar.js"
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

// Scripts
//import 'jquery/dist/jquery.min.js';
//import 'popper.js/dist/popper.min.js';
//import 'bootstrap/dist/js/bootstrap.min.js';
// Styles
//import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';



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
<<<<<<< HEAD
     <Router>
       <React.Fragment>
        <Switch>
          <Route exact path={"/"}
          
          render = {(props) => 
          <div id="Frontpage_btn">
             <button className ="btn btn-primary center-block"> News </button>
             <button className = "btn btn-primary center-block"> Calendar </button>
          </div>}         
          />
            <Route exact path={"/News"} 
            render={(props) =>
            <React.Fragment>
              <News {...props}/>
            </React.Fragment> }
=======
      <Router>
        <React.Fragment>
          <Switch>
            <Route exact path={"/"}

              render={(props) =>
                <div className="row">
                  <div className="form-group">
                    <div className="d-flex justify-content-center">
                      <a href="/News"> <button className="btn btn-primary center-block">  News </button></a>
                      <br></br>
                      <a href="/Calendar"> <button className="btn btn-primary center-block"> Calendar </button> </a>
                    </div>
                  </div>
                </div>}
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
>>>>>>> 81ab12edd25bab08210f1bb90fea460abbfd710b
            />
          </Switch>
        </React.Fragment>
      </Router>
    );
  }
}

export default App;
