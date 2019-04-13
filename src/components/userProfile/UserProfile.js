import React, { Component } from "react";
import "./UserProfile.css";
import * as login from "../../services/login";
import getLoggedInUser from "../../services/getLoggedInUser";
class UserProfile extends Component {
  constructor(props) {
    super(props);

    let myToken;
    myToken = login.getToken();
    if (myToken) {
      this.state = {
        token: "Bearer " + myToken
      };
      getLoggedInUser().then(response =>
        this.setState({
          username: response.user.username,
          email: response.user.email,
          image: response.user.image,
          bio: response.user.bio
        })
      );
    }

    this.state = {
      username: this.props.username,
      email: this.props.email,
      image: this.props.image,
      bio: this.props.bio,
      displayMenu: false
    };

    this.showMenu = this.showMenu.bind(this);
    this.hideMenu = this.hideMenu.bind(this);
  }

  showMenu(event) {
    event.preventDefault();
    this.setState({ displayMenu: true }, () => {
      document.addEventListener("click", this.hideMenu);
    });
  }

  hideMenu() {
    this.setState({ displayMenu: false }, () => {
      document.removeEventListener("click", this.hideMenu);
    });
  }

  render() {
    let dropdownMenu = this.state.displayMenu ? (
      <ul className="ul-userProfile-dropdown">
        <a className="a-userProfile-dropdown" href="/profilePage">
          <li className="li-userProfile-dropdown">Account Info</li>
        </a>

        <a className="a-userProfile-dropdown" href="/login">
          <li
            className="li-userProfile-dropdown li-userProfile-dropdown-login"
            onClick={login.logout}
          >
            Logout
          </li>
        </a>
      </ul>
    ) : null;
    if (!login.getToken()) {
      return (
        <div className="myLogin">
          <a href="/login">
            <button className="btn btn-success myLogin">Login</button>
          </a>
        </div>
      );
    }
    return (
      <div className={this.state.displayMenu ? "userProfile-dropdown" : ""}>
        <div
          id="username-dropdown"
          className={
            this.state.displayMenu
              ? "userProfile-button userProfile-button-active"
              : "userProfile-button"
          }
          onClick={this.showMenu}
        >
                {this.state.image ? (
                    <img
                        className="profilePicture-dropdown"
                        src={this.state.image}
                        alt=""
                    />
                ) : (
                    <i className="fa fa-user-circle fa-2x no-user-icon"/>
                )}

          <span id="nickName-dropdown">{this.state.username}</span>
        </div>
        {dropdownMenu}
      </div>
    );
  }
}

export default UserProfile;
