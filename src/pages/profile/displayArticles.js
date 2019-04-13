import React from "react";
import Article from "../../components/article/article";

class DisplayArticles extends React.Component {
  constructor(props) {
    super(props);
    this.renderArticle = this.renderArticle.bind(this);
    this.displayArticles = this.displayArticles.bind(this);
    this.state = {
      articles: props.articles
    };
  }

  displayArticles() {
    const articleList = this.state.articles;
    let articlesToDisplay = [];
    for (let i = 0; i < articleList.articlesCount; i++) {
      const title = articleList.articles[i].title;
      const description = articleList.articles[i].description;
      const body = articleList.articles[i].body;
      const createdAt = articleList.articles[i].createdAt;
      articlesToDisplay.push(
        this.renderArticle(i, title, description, body, createdAt)
      );
    }
    return <div className="articles">{articlesToDisplay}</div>;
  }

  renderArticle(slug, title, description, body) {
    return (
      <div key={slug}>
        <hr />
        <Article
          slug={slug}
          key={title}
          title={title}
          description={description}
          body={body}
        />
      </div>
    );
  }

  render() {
    return <div className="">{this.displayArticles()}</div>;
  }
}

export default DisplayArticles;
