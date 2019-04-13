import React, { Component } from "react";
import NavbarItem from "./navbarItem";
import "./navbarItem.css";
import "./navbar.css";
import CustomButton from "../button";
import CreateArticleWindow from "../article/createArticleWindow";
import UserProfile from "../userProfile/UserProfile";
import { getToken } from "../../services/login";

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.collapseList = this.collapseList.bind(this);
    this.popModal = this.popModal.bind(this);
    this.state = {
      showDropList: false,
      showModal: false,
      goToProfile: false,
      goToHome: false
    };
  }

  collapseList() {
    this.setState({
      showDropList: !this.state.showDropList
    });
  }

  popModal() {
    this.setState({
      showModal: !this.state.showModal
    });
  }

  renderModal() {
    return (
      <CreateArticleWindow
        articleCount={this.props.articleCount}
        onClose={this.popModal}
      />
    );
  }

  render() {
    return (
      <div className="navbar-style">
        <nav className="navbar navbar-expand-md navbar-light">
          <NavbarItem
            className="navbar-brand link-nav odessa"
            href="/"
            text="Odessa"
            icon={<i className="fas fa-anchor anchor-style" />}
          />
          <CustomButton
            name="BurgerButton"
            onClick={this.collapseList}
            className="navbar-toggler"
            text={<span className="navbar-toggler-icon" />}
          />
          <div
            className={
              this.state.showDropList
                ? "navbar-collapse"
                : "collapse navbar-collapse"
            }
          >
            <ul className="navbar-nav ul-items">
              <div className="navbar-nav ul-items col-xl-10">
                <li className="nav-item navbar-ul-item">
                  <NavbarItem className="nav-link" href="/" text="Home" />
                </li>
                <li
                  className={
                    getToken()
                      ? "nav-item navbar-ul-item"
                      : "nav-item navbar-ul-item display-none"
                  }
                >
                  <NavbarItem
                    className="nav-link"
                    href="/profilePage"
                    text="Profile page"
                  />
                </li>
                <li
                  className={
                    getToken()
                      ? "nav-item navbar-ul-item"
                      : "nav-item navbar-ul-item display-none"
                  }
                  onClick={this.goToLogin}
                >
                  <NavbarItem
                    className="nav-link"
                    text="Create article"
                    onClick={getToken() ? this.popModal : null}
                    href={getToken() ? null : "/login"}
                  />
                </li>
              </div>
              <li>
                <UserProfile />
              </li>
            </ul>
          </div>
        </nav>
        {this.state.showModal ? this.renderModal() : null}
      </div>
    );
  }
}

export default Navbar;
