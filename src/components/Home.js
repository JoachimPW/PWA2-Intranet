import React, { Component } from 'react'

import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import fire from '../config/Fire';

export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userEmail: "fire.auth().currentUser.email"
        }
        this.logout = this.logout.bind(this);
        this.subscribeToNotification = this.subscribeToNotification.bind(this);
        this.handleTokenRefresh = this.handleTokenRefresh.bind(this);
        this.subscribeToNotification = this.subscribeToNotification.bind(this);

    }

    handleTokenRefresh() {
        const FIREBASE_MESSAGEING = fire.messaging();
        const FIREBASE_AUTH = fire.auth();
        const FIREBASE_DATABASE = fire.database();
        return FIREBASE_MESSAGEING.getToken()
            .then((token) => {              
                FIREBASE_DATABASE.ref("/tokens").push({
                    token: token,
                    uid: FIREBASE_AUTH.currentUser.uid
                })
                // https://books.google.dk/books?id=iJpVDwAAQBAJ&pg=PA188&lpg=PA188&dq=store+gettoken+firebase&source=bl&ots=neRSwbhZ0q&sig=ACfU3U2fd38KQnlbXHz1RNZGZmOZ2KzQWQ&hl=da&sa=X&ved=2ahUKEwj9p8rFkoLiAhUHx4sKHUg4DEEQ6AEwB3oECAgQAQ#v=onepage&q=store%20gettoken%20firebase&f=false
                // https://developers.google.com/instance-id/reference/server
                // https://medium.freecodecamp.org/how-to-add-push-notifications-to-a-web-app-with-firebase-528a702e13e1
                // https://firebase.google.com/docs/cloud-messaging/js/send-multiple
                // https://www.youtube.com/watch?v=rumJsnHbXsI&t=289s
                // https://github.com/invertase/react-native-firebase-docs/blob/master/docs/messaging/topics.md
                // https://www.techotopia.com/index.php/Sending_Firebase_Cloud_Messages_from_a_Node.js_Server
                fetch(`https://iid.googleapis.com/iid/v1/${token}/rel/topics/all`, {
                    method:"POST",
                    headers: {
                        "Content-type": "application/json; charset=UTF-8",
                        "Authorization": "key=AAAAYdglyA8:APA91bF90DY96O2M_iPWR58f-ZW2mCpM4j86QcMUlJrDrCbZhq6zWUSTVz3rOSKr0L5Wou-sOwFRkaOZJs3sCXM7LIWWPmfNxquBm7tX9BnnNcZIxqkOCggToQUtdMGzROh69_4htV55"
                    }
                }).then((console.log("Succes")))
                console.log(token)
            })          
    }

    subscribeToNotification() {
        const FIREBASE_MESSAGEING = fire.messaging();
        FIREBASE_MESSAGEING.requestPermission()    
            .then(() => this.handleTokenRefresh())
            .catch(() => console.log("User didn't give permission"));
      
    }

    unsubscribeToNotifcation() {
        fire.messaging().getToken()
        .then((token) => fire.messaging().deleteToken(token))
        .then(() => fire.database().ref("/tokens").orderByChild("uid").equalTo(fire.auth().currentUser.uid)
        .once("value"))
        .then((snapshot) => {
            console.log(snapshot.val());
            const key = Object.keys(snapshot.val() ) [0];
            return fire.database().ref("/tokens").child(key).remove();
            
        })        
    }  

    logout() {
        fire.auth().signOut();
    }
    render() {
        return (
            <div>
                <h1>You are home!</h1>
                <h3>Logged in as:{this.state.userEmail}</h3>
                <button onClick={this.logout}>Logout</button>
                <br></br> <br></br>
                <button ref="sub" className="btn btn-success" onClick={this.subscribeToNotification}>Subscribe</button>
                <button id="unsub" className="btn btn-danger" onClick={this.unsubscribeToNotifcation}>Unsubscribe</button>
            </div>
        )
    }
}
