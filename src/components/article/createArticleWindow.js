import React, { Component } from "react";
import "./createArticleWindow.css";
import CustomButton from "../button";
import ArticlePreview from "./articlePreview";
import CKEditor from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import postArticleCall from "../../services/postArticle";

ClassicEditor.defaultConfig = {
  toolbar: {
    items: ["heading", "|", "bold", "italic", "link", "undo", "redo"]
  }
};

class CreateArticleWindow extends Component {
  constructor(props) {
    super(props);
    this.togglePreview = this.togglePreview.bind(this);
    this.setBody = this.setBody.bind(this);
    // this.setTags = this.setTags.bind(this);
    this.setDescription = this.setDescription.bind(this);
    this.postArticle = this.postArticle.bind(this);
    this.setImage = this.setImage.bind(this);
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
    this.state = {
      previewArticle: false,
      title: "none",
      description: "none",
      body: "none",
      tagList: [],
      imageUrl: undefined,
      imageName: "",
      width: 0,
      height: 0
    };
  }

  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener("resize", this.updateWindowDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateWindowDimensions);
  }

  updateWindowDimensions() {
    this.setState({ width: window.innerWidth, height: window.innerHeight });
  }

  setDescription(htmlString) {
    this.setState({
      description: htmlString
    });
  }

  setBody() {
    this.setState({
      body: this.state.imageUrl
    });
  }

  // setTags() {
  //   this.setState({
  //     tagList: this.getTags()
  //   });
  // }

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

  setImage(event) {
    if (event.target.files && event.target.files[0]) {
      this.setState({ imageName: event.target.files[0].name });
      this.getBase64(event.target.files[0], result =>
        this.setState({ imageUrl: result })
      );
    }
    event.target.value = null;
  }

  // getTags() {
  //   let tags = [];
  //   let str = this.state.description;
  //   tags.push(str.match(/#[a-z0-9]*/g));
  //   return tags;
  // }

  togglePreview() {
    this.setState({
      previewArticle: !this.state.previewArticle
    });
    // this.setTags();
  }

  postArticle() {
    postArticleCall(
      this.props.articleCount,
      this.state.description,
      this.state.body,
      this.state.tagList
    ).then(result => this.props.onClose());
  }

  renderArticle() {
    if (this.state.previewArticle) {
      return (
        <ArticlePreview
          slug={this.props.articleCount + 1 + ""}
          description={this.state.description}
          body={this.state.body}
          onClose={this.togglePreview}
        />
      );
    }
    return null;
  }

  render() {
    return (
      <div>
        <div
          className={
            !this.state.previewArticle &&
            (this.state.width > 411 && this.state.height > 600)
              ? "container-fluid article-pop small-article"
              : ((!this.state.previewArticle) ? "container-fluid article-pop" : "dont-show")
          }
          role="dialog"
        >
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Create article</h5>
                <CustomButton
                  className="close"
                  onClick={this.props.onClose}
                  text={<span aria-hidden="true">&times;</span>}
                  name="X"
                />
              </div>
              <div className="modal-body">
                <div>
                  <CKEditor
                    editor={ClassicEditor}
                    onChange={(event, editor) => {
                      const data = editor.getData();
                      this.setDescription(data);
                    }}
                  />
                </div>
                <div className="input-group img-container">
                  <div className="custom-file">
                    <input
                      type="file"
                      className="custom-file-input input-image"
                      id="image-selector"
                      accept="image/*"
                      onChange={this.setImage}
                    />
                    <label
                      className="custom-file-label"
                      htmlFor="image-selector"
                      aria-describedby="inputGroupFileAddon02"
                    >
                      {this.state.imageName
                        ? this.state.imageName
                        : "Select image"}
                    </label>
                  </div>
                  <div className="input-group-append">
                    <button
                      type="button"
                      className="btn btn-info"
                      onClick={this.setBody}
                    >
                      Add image
                    </button>
                  </div>
                </div>
              </div>
              <div className="modal-footer footer-buttons">
                <CustomButton
                  className="btn btn-primary mr-auto"
                  onClick={this.togglePreview}
                  text="Preview"
                  name="Preview"
                />
                <CustomButton
                  className="btn btn-secondary"
                  onClick={this.props.onClose}
                  text="Close"
                  name="Close"
                />
                <CustomButton
                  className="btn btn-success"
                  onClick={this.postArticle}
                  text="Save"
                  name="Save"
                />
              </div>
            </div>
          </div>
        </div>
        {this.state.previewArticle ? this.renderArticle() : null}
      </div>
    );
  }
}
export default CreateArticleWindow;
