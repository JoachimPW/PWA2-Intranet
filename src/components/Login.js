import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import fire from '../config/Fire';


export default class Login extends Component {
    constructor(props) {
        super(props);
        this.login = this.login.bind(this);
        this.signup = this.signup.bind(this);
        this.handleChange = this.handleChange.bind(this);        
        this.state = {
            email:"",
            password: ""
        }
    }

    login(e) {
        e.preventDefault();
        fire.auth().signInWithEmailAndPassword(this.state.email, this.state.password).then((u) => {
        }).catch((error) => {
            console.log(error);
        });
    }

    signup(e) {
        e.preventDefault();
        fire.auth().createUserWithEmailAndPassword(this.state.email, this.state.password)
        .catch((error) => {
            console.log(error)
        })
    }

    handleChange(e){
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render() {
        return (
            <div className="col-md-6">
                <form>
                    <div className="form-group">
                        <label for="Email">Email Address</label>
                        <input value={this.state.email} onChange={this.handleChange} type="email" name="email"
                            className="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter Email" />
                        <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else</small>
                    </div>
                    <div className="form-group">
                        <label for="password">Password</label>
                        <input value={this.state.password} onChange={this.handleChange} type="password" name="password"
                            className="form-control" id="password" placeholder="Password" />
                    </div>
                    <button type="submit" onClick={this.login} className="btn btn-primary">Login</button>
                    <button onClick={this.signup} style={{ marginLeft: "25px" }} className="btn btn-success">Signup</button>
                </form>

            </div>
        )
    }
}
