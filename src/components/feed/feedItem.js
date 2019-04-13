import React, { Component } from "react";
import "./feedItem.css";
import CommentBox from "../likePartComponent/comments";
import Article from "../article/article";
import deleteFavoriteArticle from "../../services/deleteFavorites";
import postFavoriteArticle from "../../services/postFavoritesArticles";
import { getToken } from "../../services/login";

class FeedItem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: this.props.username,
      email: this.props.email,
      image: this.props.image,
      bio: this.props.bio,
      idUnique: "toBeChanged" + this.props.feedKey,
      isFavorite: true,
      showComment: false
    };
  }

  getDate(data) {
    let dateStr = data.substring(0, 19) + "Z";
    let date = new Date(dateStr);
    let myDate = new Intl.DateTimeFormat("default", {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
      hour12: false
    }).format(date);
    return myDate;
  }

  makeFavorite = () => {
    this.setState({
      ...this.state,
      isFavorite: !this.state.isFavorite
    });

    let url = `http://localhost:5000/articles/${
      this.props.value.slug
    }/favorite`;
    if (this.state.isFavorite === true) {
      postFavoriteArticle(url);
    } else {
      deleteFavoriteArticle(url);
    }
  };

  showComments = () => {
    this.setState({
      ...this.state,
      showComment: !this.state.showComment
    });
  };

  render() {
    return (
      <div className="feeditem">
        <div className="row media">
          <a
            className={
              this.props.value.author.image
                ? "media-left in-feed-item"
                : "no-user"
            }
            href="#"
          >
            {this.props.value.author.image ? (
              <img
                className="profile-photo"
                src={this.props.value.author.image}
                alt=""
              />
            ) : (
              <i className="fa fa-user-circle fa-2x media-left no-img" />
            )}
          </a>
          <div className="media-body row">
            <div className="col-sm-8 name-class">
              <a href="#" className="anchor-username">
                <h5 className="media-heading">
                  {this.props.value.author.username}
                </h5>
              </a>
              <span className="anchor-time">
                {this.getDate(this.props.value.createdAt)}
              </span>
            </div>

            <div
              className={
                getToken()
                  ? "anchor-favorite col-sm-4"
                  : "anchor-favorite display-none"
              }
              onClick={this.makeFavorite}
            >
              <i
                id={this.state.idUnique}
                className={
                  this.state.isFavorite ? "far fa-star" : "fas fa-star"
                }
              />
            </div>
          </div>
        </div>
        <Article
          slug={this.props.feedKey}
          description={this.props.value.description}
          body={this.props.value.body}
        />
        <hr />
        <div className="row">
          <div className="post-footer-option container post-footer">
            <ul className="row list-unstyled">
              <li>
                <a className="col-4" href="#">
                  <i className="fa fa-thumbs-up" /> Like
                </a>
              </li>
              <li>
                <a className="col-4" href="#" onClick={this.showComments}>
                  <i className="fa fa-comment" /> Comment
                </a>
              </li>
              <li>
                <a className="col-4" href="#">
                  <i className="fa fa-share-alt" /> Share
                </a>
              </li>
            </ul>
            {this.state.showComment ? (
              <div>
                <hr />
                <CommentBox article={this.props.value.slug} />
              </div>
            ) : (
              ""
            )}
            <hr />
          </div>
        </div>
      </div>
    );
  }
}

export default FeedItem;
