import React from "react";
import "./profile.css";
import UserDetails from "./userDetails";
import ProfileModal from "../../components/profileModal";
import MyArticles from "./myArticles";
import { logout, getToken } from "../../services/login";
import { Redirect } from "react-router-dom";

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.toggleButton = this.toggleButton.bind(this);
    this.updateUser = this.updateUser.bind(this);
    this.pageLogout = this.pageLogout.bind(this);
    this.state = {
      showFavArt: false,
      showFolUsers: false,
      showArticles: false,
      showComments: false,
      token: this.props.token,
      username: this.props.username,
      email: this.props.email,
      password: this.props.password,
      image: this.props.image,
      bio: this.props.bio,
      logout: false
    };
  }

  pageLogout() {
    this.setState({
      logout: true
    });
    logout();
  }
  updateUser(password, image, bio) {
    this.setState({
      password: password,
      image: image,
      bio: bio
    });
    this.props.updateUser(password, image, bio);
  }

  toggleButton(prop) {
    const currentState = this.state[prop];
    this.setState({ [prop]: !currentState });
  }

  render() {
    if (!getToken()) {
      return <Redirect to="/login" />;
    }
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-1" />
          <div className="container col-md-10">
            <div className="card card-default">
              <div className="card-heading">
                <h1>My profile</h1>
              </div>
              <div className="card-body fixed-card my-profile">
                <div className="container">
                  <div className="row">
                    <UserDetails
                      token={this.state.token}
                      username={this.state.username}
                      email={this.state.email}
                      image={this.state.image}
                      bio={this.state.bio}
                      updateUser={this.updateUser}
                    />
                  </div>
                  <hr />
                  <div className="row">
                    <div className="col-md-6 addPadding">
                      <button
                        type="button"
                        className="btn btn-info"
                        onClick={e => this.toggleButton("showArticles")}
                      >
                        <i className="fas fa-newspaper" />
                        My Articles
                      </button>
                      <div className="showMyArticles">
                        {this.state.showArticles ? (
                          <ProfileModal
                            title="My Articles"
                            modalBody={
                              <MyArticles username={this.state.username} />
                            }
                            onClose={e => this.toggleButton("showArticles")}
                          />
                        ) : null}
                      </div>
                    </div>
                    <div className="col-md-6 addPadding">
                      <button
                        type="button"
                        className="btn btn-danger"
                        onClick={this.pageLogout}
                      >
                        Logout
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-1" />
        </div>
      </div>
    );
  }
}

export default Profile;
