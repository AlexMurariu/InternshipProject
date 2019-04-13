import React, { Component } from "react";
import "./SignUpInputPass.css";

class InputPass extends Component {
  render() {
    return (
      <div>
        <input
          className="SignUp-Pass"
          type="password"
          name="Pass"
          value={this.props.value}
          onChange={this.props.handleChange}
          required
        />
        <span className="placeholder-Pass">Password *</span>
      </div>
    );
  }
}

export default InputPass;
