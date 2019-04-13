import * as React from "react";
import "./article.css";
import "./articlePreview.css";
import Article from "./article";

export default class ArticlePreview extends React.Component {
  render() {
    return (
      <div className="show-article" role="dialog">
        <div className="modal-dialog modal-scroll" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Preview article</h5>
              <button
                type="button"
                className="close"
                onClick={this.props.onClose}
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="preview-article">
              <Article
                slug={this.props.slug}
                title={this.props.slug}
                description={this.props.description}
                body={this.props.body}
                onClose={this.togglePreview}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
