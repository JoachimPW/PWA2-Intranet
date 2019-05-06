import firebase from 'firebase';
import React, { Component } from 'react';
<script src="https://www.gstatic.com/firebasejs/5.11.1/firebase.js"></script>

  var config = {
    apiKey: "AIzaSyBVKgLE6GKwP8an2_cKzHaAO8jHdNgPLHM",
    authDomain: "simply-notify-f4ce7.firebaseapp.com",
    databaseURL: "https://simply-notify-f4ce7.firebaseio.com",
    projectId: "simply-notify-f4ce7",
    storageBucket: "simply-notify-f4ce7.appspot.com",
    messagingSenderId: "420238182415"
  };
 const fire = firebase.initializeApp(config);
 export default fire;
