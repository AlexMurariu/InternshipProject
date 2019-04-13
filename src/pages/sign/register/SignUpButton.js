import React, {Component} from "react";
import "./SignUpButton.css";

class SignUpButton extends Component {
  render() {
    return (
      <button class="SignUp-Button" onClick={this.props.action}>
        Register
      </button>
    );
  }
}

export default SignUpButton;
