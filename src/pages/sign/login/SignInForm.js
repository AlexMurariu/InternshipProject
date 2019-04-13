import React, { Component } from "react";
import "./SignInForm.css";
import * as login from "../../../services/login";
import { Redirect } from "react-router-dom";

class SignInForm extends Component {
  constructor(props) {
    super(props);
    this.update = this.update.bind(this);
    this.loginCall = this.loginCall.bind(this);
    this.state = {
      myPass: props.myPass,
      myEmail: props.myEmail,
      username: props.username,
      email: props.email,
      token: props.token
    };
  }

  loginCall() {
    const user = this.state.myEmail;
    const pass = this.state.myPass;
    login
      .login(user, pass)
      .then(res => this.setState({ token: login.getToken() }));
  }

  update(event) {
    this.setState({
      [event.target.id]: event.target.value
    });
  }

  render() {
    if (this.state.token) {
      return <Redirect to="/" />;
    }
    return (
      <div className="container-fluid row">
        <div className="col-lg-7" />
        <div className="col-lg-5 big-container">
          <div className="login-container">
            <form className="container-fluid">
              <div className="row form-group">
                <h3>Sign in</h3>
              </div>
              <hr />
              <div className="row intro-container">
                <p>Hello there, what are you waiting for?! Get in!</p>
              </div>
              <div class="row form-group">
                <label for="myEmail">Email address</label>
                <input
                  type="email"
                  class="form-control"
                  id="myEmail"
                  aria-describedby="emailHelp"
                  placeholder="Enter email"
                  value={this.state.myEmail}
                  onChange={this.update}
                />
              </div>
              <div class="row form-group">
                <label for="myPass">Password</label>
                <input
                  type="password"
                  class="form-control"
                  id="myPass"
                  placeholder="Password"
                  value={this.state.myPass}
                  onChange={this.update}
                />
              </div>
              <div className="row form-group">
                <button
                  type="button"
                  class="btn btn-success"
                  onClick={this.loginCall}
                >
                  Take Me In
                </button>
              </div>
              <div className="row signup-container">
                <p>
                  <a href="/register"> Sign up for yet another account </a>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default SignInForm;
