import React, {Component} from "react";
import "./feed.css";
import FeedItem from "./feedItem";

class Feed extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: 10,
            loadingState: false
        };
    }

    static renderFeedItem(key, value) {
        return (
            <li key={key}>
                <FeedItem feedKey={key} value={value}/>
            </li>
        );
    }

    displayItems() {
        let items = [];
        const length =
            this.props.articles.length < this.props.items
                ? this.props.articles.length
                : this.props.items;
        for (let k = 0; k < length; k++) {
            items.push(Feed.renderFeedItem(k, this.props.articles[k]));
        }
        return items;
    }

    componentDidMount() {
        this.props.onScrollEnd();
        this.refs.iScroll.addEventListener("scroll", () => {
            if (this.props.items > this.props.articleCount || this._fetching) {
                return;
            }
            if (
                this.refs.iScroll.scrollTop + this.refs.iScroll.clientHeight >=
                this.refs.iScroll.scrollHeight
            ) {
                if (
                    this.refs.iScroll.scrollTop + this.refs.iScroll.clientHeight >=
                    this.refs.iScroll.scrollHeight - 20
                ) {
                    this._fetching = true;
                    this.props.onScrollEnd();
                }
            }
        });
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.loadingState === false) {
            this._fetching = false;
        }
    }

    render() {
        return (
            <div className="container feed" id="wrapper">
                <div className="row">
                    <div className="col-sm-1"/>
                    <div className="container col-sm-10">
                        <div className="card card-default">
                            <div className="card-header">
                                Your feed, that which is a reflection of yourself
                            </div>
                            <div className="card-body fixed-card" ref="iScroll">
                                <ul className="display-list ">{this.displayItems()}</ul>
                                {this.props.loadingState ? (
                                    <div className="text-center">
                                        <div
                                            className="spinner-border text-secondary"
                                            role="status"
                                        >
                                            <span className="sr-only">Loading...</span>
                                        </div>
                                        <p>Loading...</p>
                                    </div>
                                ) : (
                                    ""
                                )}
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-1"/>
                </div>
            </div>
        );
    }
}

export default Feed;
