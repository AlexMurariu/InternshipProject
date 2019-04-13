import React, {Component} from "react";
import Comment from "./comment";
import "./comments.css";
import getComments from "../../services/getComments";
import postComments from "../../services/postComments";
import {getToken} from "../../services/login";

class CommentBox extends Component {
    constructor(props) {
        super(props);
        this.state = {
            comments: [],
            body: ""
        };
    }

    submit = () => {
        let collection = {
            comment: {
                body: this.state.body
            },
            slug: "string"
        };

        postComments(this.props.article, collection).then(response => {
            this.setState({body: ""});
            this.componentDidMount();
        })

    };


    update(id, value) {
        this.setState({
            [id]: value
        });
    }

    componentDidMount() {
        getComments(this.props.article).then(result => this.setState({
            comments: result.comments
        }));
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-8">
                        <div className="page-header"/>
                        <div className="comments-list">
                            {this.state.comments.map(comment => (
                                <Comment
                                    name={comment.author.username}
                                    commentBody={comment.body}
                                    date={comment.createdAt}
                                    image={comment.author.image}
                                />
                            ))}
                        </div>
                        <form className={getToken() ? "form-group write-comm" : "form-group write-comm display-none"}>
                            <textarea
                                className="form-control bio field"
                                id="body"
                                value={this.state.body}
                                rows="2"
                                spellCheck="false"
                                placeholder="Add comment"
                                onChange={e => this.update(e.target.id, e.target.value)}
                            />
                            <i className="fa fa-paper-plane fa-2x send-icon" onClick={this.submit}/>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default CommentBox;
