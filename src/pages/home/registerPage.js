import React, { Component } from "react";
import "./home.css";
import Navbar from "../../components/navbar/navbar";
import SignBackground from "../sign/signComponents/background";
import SignUpForm from "../sign/register/SignUpForm";

class RegisterPage extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <SignBackground />
        <SignUpForm />
      </div>
    );
  }
}

export default RegisterPage;
