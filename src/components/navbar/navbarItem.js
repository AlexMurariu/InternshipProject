import React from "react";

class NavbarItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      textContent: this.props.text,
      icon: this.props.icon,
      onClick: this.props.onClick
    };
  }
  render() {
    return (
      <a
        className={this.props.className}
        href={this.props.href}
        onClick={this.state.onClick}
      >
        {this.state.icon}
        {this.state.textContent}
      </a>
    );
  }
}

export default NavbarItem;
