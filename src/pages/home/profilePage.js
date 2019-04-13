import React, { Component } from "react";
import Background from "../../components/background/background";
import Navbar from "../../components/navbar/navbar";
import Profile from "../profile/profile.js";
import Loading from "../../components/loading";
import * as login from "../../services/login";
import getLoggedInUser from "../../services/getLoggedInUser";
import updateUserDetails from "../../services/updateUserDetails";
import { Redirect } from "react-router-dom";

class ProfilePage extends Component {
  constructor(props) {
    super(props);
    this.updateUser = this.updateUser.bind(this);
    let myToken = "";
    myToken = login.getToken();
    if (myToken) {
      getLoggedInUser().then(response =>
        this.setState({
          username: response.user.username,
          email: response.user.email,
          password: response.user.password,
          image: response.user.image,
          bio: response.user.bio
        })
      );
    }

    this.state = {
      token: this.props.token,
      username: this.props.username,
      email: this.props.email,
      password: this.props.password,
      image: this.props.image,
      bio: this.props.bio
    };
  }

  updateUser(password, image, bio) {
    updateUserDetails(password, image, bio)
      .then(response =>
        this.setState({
          password: response.user.password,
          image: response.user.image,
          bio: response.user.bio
        })
      )
      .catch(error => console.log(error));
  }

  render() {
    if (!login.getToken()) {
      return <Redirect to="/login" />;
    }
    return (
      <div>
        <Background />
        <Navbar />
        {this.state.username ? (
          <Profile
            token={this.state.token}
            username={this.state.username}
            email={this.state.email}
            image={this.state.image}
            bio={this.state.bio}
            updateUser={this.updateUser}
          />
        ) : (
          <div className=" row">
            <div className="col-sm-1" />
            <div className="container-fluid text-center loading-panel col-sm-10">
              {Loading()}
            </div>
            <div className="col-sm-1" />
          </div>
        )}
      </div>
    );
  }
}

export default ProfilePage;
