import React from "react";
import DisplayArticles from "./displayArticles";
import Loading from "../../components/loading";
import getUserArticles from "../../services/getUserArticles";

class MyArticles extends React.Component {
  constructor(props) {
    super(props);
    this.displayArticles = this.displayArticles.bind(this);
    this.state = {
      username: this.props.username,
      articles: this.props.articles
    };

    getUserArticles(this.state.username).then(res =>
      this.setState({ articles: res })
    );
  }

  displayArticles() {
    return <DisplayArticles articles={this.state.articles} />;
  }

  render() {
    return (
      <div className="container-fluid text-center articles-container">
        {this.state.articles ? this.displayArticles() : Loading()}
      </div>
    );
  }
}

export default MyArticles;
