import React, { Component } from "react";
import Feed from "../../components/feed/feed";
import "./home.css";
import axios from "axios";
import Background from "../../components/background/background";
import Navbar from "../../components/navbar/navbar";

class FeedPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      articlesCount: 0,
      limit: 100,
      offset: 0,
      loadingState: true
    };

    this.fetchMoreData = this.fetchMoreData.bind(this);
  }

  componentDidMount() {
    axios
      .get(
        `http://localhost:5000/articles/feed?limit=${this.state.limit}&offset=${
          this.state.offset
        }`
      )
      .then(res => {
        const result = res.data.articles;
        const countResult = res.data.articlesCount;
        this.setState({
          articles: result,
          articlesCount: countResult
        });
      })
      .catch(err => console.log(err));
  }

  fetchMoreData = () => {
    if (this.state.loadingState === false) {
      this.setState({ loadingState: true });
    }
    setTimeout(() => {
      this.setState({
        loadingState: false,
        offset: this.state.offset + 6
      });
    }, 1000);
  };

  render() {
    return (
      <div>
        <Navbar articleCount={this.state.articlesCount} />
        <Feed
          articles={this.state.articles}
          items={this.state.offset}
          loadingState={this.state.loadingState}
          onScrollEnd={this.fetchMoreData}
          articleCount={this.state.articlesCount}
        />
        <Background />
      </div>
    );
  }
}

export default FeedPage;
