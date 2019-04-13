import React, { Component } from "react";
import "./Username.css";

class Username extends Component {
  render() {
    return (
      <div>
        <input
          className="SignUp-Username"
          type="text"
          name="Username"
          required
          value={this.props.value}
          onChange={this.props.handleChange}
        />
        <span className="placeholder-Username">Username*</span>
      </div>
    );
  }
}

export default Username;
