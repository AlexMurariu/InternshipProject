import React, { Component } from "react";
import axios from "axios";
import "./SignUpForm.css";
import Username from "./Username";
import InputMail from "./InputMail";
import SignUpInputPass from "./SignUpInputPass";
import SignUpButton from "./SignUpButton";
import LoginFromSignUp from "./LoginFromSignUp";
import {Redirect} from "react-router-dom";


class SignUpForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      newUser: {
        username: "",
        email: "",
        password: "",
        registered: false
      },

      rememberMe: false
    };

    this.handleUsername = this.handleUsername.bind(this);
    this.handleEmail = this.handleEmail.bind(this);
    this.handlePassword = this.handlePassword.bind(this);
    this.handleFormSumbit = this.handleFormSumbit.bind(this);
  }

  handleUsername(e) {
    let value = e.target.value;

    this.setState(prevState => ({
      newUser: {
        ...prevState.newUser,
        username: value
      }
    }));
  }

  handleEmail(e) {
    let value = e.target.value;

    console.log(value);

    this.setState(prevState => ({
      newUser: {
        ...prevState.newUser,
        email: value
      }
    }));
  }

  handlePassword(e) {
    let value = e.target.value;

    this.setState(prevState => ({
      newUser: {
        ...prevState.newUser,
        password: value
      }
    }));
  }


  handleFormSumbit(e) {
    e.preventDefault();

    let userData = {
      user: {
        username: this.state.newUser.username,
        email: this.state.newUser.email,
        password: this.state.newUser.password
      }
    };

    let url = `http://localhost:5000/users`;

    axios
      .post(url, userData, {
        headers: {
          accept: "text/plain",
          "Content-Type": "application/json-patch+json"
        }
      })
      .then(response => {
        this.setState({
          registered: true
        })
      })
      .catch(err => {
        console.log("[Error] register could not complete: " + err);
        if (err.message === "Request failed with status code 400") {
          window.alert("Username or email in use");
        }
      });
  }

  render() {

    if (this.state.registered) {
      return <Redirect to="/login" />;
    }

    return (
      <div className="SignIn-formContainer">
        <div className="SignIn-formHeader-Container">
          <span className="SignIn-formTitle">Sign Up</span>
        </div>

        <span className="SignIn-FormHello">
          Hello there, what are you waiting for? Sign Up!
        </span>

        <form action="#" onSubmit={this.handleFormSumbit}>
          <Username
            value={this.state.newUser.username}
            handleChange={this.handleUsername}
          />
          <InputMail
            value={this.state.newUser.email}
            handleChange={this.handleEmail}
          />
          <SignUpInputPass
            value={this.state.newUser.password}
            handleChange={this.handlePassword}
          />
          <SignUpButton onClick={this.handleFormSumbit}/>
          <LoginFromSignUp />
        </form>
      </div>
    );
  }
}

export default SignUpForm;
