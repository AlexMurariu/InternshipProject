import React from "react";
import "./userDetails.css";

class UserDetails extends React.Component {
  constructor(props) {
    super(props);
    this.toggleClass = this.toggleClass.bind(this);
    this.deleteImage = this.deleteImage.bind(this);
    this.getBase64 = this.getBase64.bind(this);
    this.update = this.update.bind(this);
    this.save = this.save.bind(this);
    this.state = {
      username: this.props.username,
      email: this.props.email,
      password: this.props.password,
      imageUrl: this.props.image ? this.props.image : undefined,
      imageName: this.props.image ? "Great image" : "No image",
      bio: this.props.bio,
      editActive: false
    };
  }

  getBase64(file, cb) {
    let reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = function() {
      cb(reader.result);
    };
    reader.onerror = function(error) {
      console.log("Error: ", error);
    };
  }

  onImageChange = event => {
    if (event.target.files && event.target.files[0]) {
      this.setState({ imageName: event.target.files[0].name });
      this.getBase64(event.target.files[0], result =>
        this.setState({ imageUrl: result })
      );
    }
    event.target.value = null;
  };

  deleteImage() {
    this.setState({
      imageUrl: "",
      imageName: "No image"
    });
  }

  update(event) {
    this.setState({
      [event.target.id]: event.target.value
    });
  }

  toggleClass() {
    const currentState = this.state.editActive;
    this.setState({ editActive: !currentState });
  }

  save() {
    this.props.updateUser(
      this.state.password,
      this.state.imageUrl,
      this.state.bio
    );
    this.toggleClass();
  }

  render() {
    return (
      <div className="user-details">
        <div className="row">
          <div className="col-md-4 image-container">
            {this.state.imageUrl ? (
              <img
                id="target"
                src={this.state.imageUrl}
                alt="User"
                className="user-image img-thumbnail rounded"
              />
            ) : (
              <i className="fas fa-user user-icon img-thumbnail rounded" />
            )}
          </div>
          <div className="col-md-8 ">
            <form
              className={this.state.editActive ? "" : "disabled"}
              noValidate
            >
              <div className="form-row">
                <div className="col-3">
                  <p className="input-label">Username</p>
                </div>
                <div className="col-9">
                  <input
                    className="form-control field"
                    type="text"
                    id="username"
                    value={this.state.username}
                    readOnly
                  />
                </div>
              </div>
              <div className="form-row">
                <div className="col-3">
                  <p className="input-label">Email</p>
                </div>
                <div className="col-9">
                  <input
                    className="form-control field"
                    type="email"
                    id="email"
                    value={this.state.email}
                    readOnly
                  />
                </div>
              </div>
              <div className="form-row">
                <div className="col-3">
                  <p className="input-label">Password</p>
                </div>
                <div className="col-9">
                  <input
                    className="form-control field"
                    type="password"
                    id="password"
                    placeholder="Do you want a new password?"
                    value={this.state.password}
                    onChange={this.update}
                    disabled={this.state.editActive ? "" : "disabled"}
                  />
                </div>
              </div>
              <div className="form-row">
                <div className="col-3">
                  <p className="input-label">Image</p>
                </div>
                <div className="col-9">
                  <div
                    className={
                      this.state.editActive
                        ? "input-group hidden"
                        : "input-group"
                    }
                  >
                    <input
                      className="form-control field"
                      type="text"
                      id="image"
                      value={this.state.imageName}
                      disabled="disabled"
                      readOnly
                    />
                  </div>
                  <div
                    className={
                      this.state.editActive
                        ? "input-group"
                        : "input-group hidden"
                    }
                  >
                    <div className="custom-file">
                      <input
                        type="file"
                        className="custom-file-input field"
                        id="image-selector"
                        accept="image/*"
                        onClick={this.onImageChange}
                        onChange={this.onImageChange}
                        disabled={this.state.editActive ? "" : "disabled"}
                      />
                      <label
                        className="custom-file-label image-name"
                        htmlFor="image-selector"
                        aria-describedby="inputGroupFileAddon02"
                      >
                        {this.state.imageName}
                      </label>
                    </div>
                    <div className="input-group-append">
                      <button
                        type="button"
                        className={
                          this.state.editActive
                            ? "btn btn-danger"
                            : "btn btn-light disabled"
                        }
                        disabled={this.state.imageUrl ? "" : "disabled"}
                        onClick={this.deleteImage}
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="form-row">
                <div className="col-3">
                  <p className="input-label">Bio</p>
                </div>
                <div className="col-9">
                  <div className="sm-form amber-textarea active-amber-textarea">
                    <textarea
                      className="form-control bio field"
                      id="bio"
                      value={this.state.bio}
                      rows="4"
                      spellCheck="false"
                      placeholder="About me"
                      onChange={this.update}
                      disabled={this.state.editActive ? "" : "disabled"}
                    />
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
        <div className="row addPadding">
          <div className="col-md-3" />
          <div className="col-md-3">
            <button
              type="button"
              className={
                this.state.editActive
                  ? "btn btn-light disabled"
                  : "btn btn-warning"
              }
              onClick={this.toggleClass}
              disabled={this.state.editActive ? "disabled" : ""}
            >
              <i className="far fa-edit" />
              Edit
            </button>
          </div>
          <div className="col-md-3">
            <button
              type="button"
              className={
                this.state.editActive
                  ? "btn btn-success"
                  : "btn btn-light disabled"
              }
              onClick={this.save}
              disabled={this.state.editActive ? "" : "disabled"}
            >
              <i className="far fa-save" />
              Save
            </button>
          </div>
          <div className="col-md-3" />
        </div>
      </div>
    );
  }
}

export default UserDetails;
