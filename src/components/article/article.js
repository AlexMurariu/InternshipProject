import React from "react";
import "./article.css";

export default class Article extends React.Component {
  componentDidMount() {
    this.injectHTML();
  }

  injectHTML() {
    let frag;
    if (this.props.description === "none") {
      frag = document.createRange().createContextualFragment("");
    } else {
      frag = document
        .createRange()
        .createContextualFragment(this.props.description);
    }
    let placementNode = document.getElementById(this.props.slug);
    placementNode.appendChild(frag);
  }

  render() {
    return (
      <div className="container article" key={this.props.slug}>
        <div className="row article-header">
          <div className="article-description" id={this.props.slug} />
        </div>
        <div>
          <img className="article-image" src={this.props.body} alt="" />
        </div>
      </div>
    );
  }
}
