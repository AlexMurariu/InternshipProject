import React from "react";

export default class CustomButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: props.text,
      class: props.className,
      name: props.name
    };
  }

  render() {
    return (
      <button onClick={this.props.onClick} className={this.state.class} name={this.state.name}>
        {this.state.text}
      </button>
    );
  }
}
