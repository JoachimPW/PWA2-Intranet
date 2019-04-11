import React, { Component } from 'react'


export default class HeaderInclude extends Component {
  render() {
    return (
      <React.Fragment>
      
     
    <meta name="viewport" content="width=device-width, initial-scale=1.0"> </meta>
    <meta http-equiv="X-UA-Compatible" content="IE=edge"> </meta>
    <title>Kindergarten</title>
    
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.0/css/bootstrap.min.css" integrity="sha384-9gVQ4dYFwwWSjIDZnLEWnxCjeSWFphJiwGPXr1jddIhOegiu1FwO5qRGvFXOdJZ4" crossorigin="anonymous"></link>
    
    <link rel="stylesheet" href="style3.css"></link>
   
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/malihu-custom-scrollbar-plugin/3.1.5/jquery.mCustomScrollbar.min.css"></link>
    
    <script defer src="https://use.fontawesome.com/releases/v5.0.13/js/solid.js" integrity="sha384-tzzSw1/Vo+0N5UhStP3bvwWPq+uvzCMfrN1fEFe+xBmv1C/AtVX5K0uZtmcHitFZ" crossorigin="anonymous"></script>
    <script defer src="https://use.fontawesome.com/releases/v5.0.13/js/fontawesome.js" integrity="sha384-6OIrr52G08NpOFSZdxxz1xdNSndlD4vdcf/q2myIUVO0VsqaGHJsB0RaBE01VTOY" crossorigin="anonymous"></script>
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css" integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf" crossorigin="anonymous"></link>
  

<nav id="sidebar">
            <div id="dismiss">
                <i class="fas fa-arrow-left"></i>
            </div>

            <div class="sidebar-header">
                <h3>Kindergarten</h3>
            </div>

            <ul class="list-unstyled components">
                <p class="logged-in">Logged in as:<br /> Adam Abel</p>
                <li>
                    <a href="index3.html"><i class="fas fa-home icon-nav"></i>Home</a>                 
                </li>
                <li class="active">
                    <a href="news.html"><i class="fas fa-newspaper icon-nav"></i>News</a>                                  
                </li>
                <li>
                    <a href="#"><i class="far fa-calendar-alt icon-nav"></i>Calendar</a>
                </li>
                <li>
                    <a href="#"><i class="far fa-images icon-nav"></i>Photos</a>
                </li>
            </ul>

            <ul class="list-unstyled CTAs">
                <li>
                    <a href="#" class="download">Logout</a>
                </li>
            </ul>
        </nav>
        </React.Fragment>   
    
    )
  }
}
