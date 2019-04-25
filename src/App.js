import React, { Component } from 'react';
import News from "./components/News.js";

// Scripts
//import 'jquery/dist/jquery.min.js';
//import 'popper.js/dist/popper.min.js';
//import 'bootstrap/dist/js/bootstrap.min.js';
// Styles
//import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import HeaderInclude from './header.js';

class App extends Component {
  render() {
    return (
     
      <div>
        
        <News/>
      </div>
     
    );
  }
}

export default App;
