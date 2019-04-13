import React, { Component } from "react";
import "./InputMail.css";

class InputMail extends Component {
  render() {
    return (
      <div>
        <input
          className="SignUp-Mail"
          type="email"
          name="Mail"
          value={this.props.value}
          onChange={this.props.handleChange}
          required
        />
        <span className="placeholder-Mail">E-mail *</span>
      </div>
    );
  }
}

export default InputMail;
