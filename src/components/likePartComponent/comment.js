import React, {Component} from "react";
import "./comment.css";

class Comment extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div>
            <div className="media">
                <a className={this.props.image ? "media-left" : "no-user"} href="#">
                    {this.props.image ? (
                        <img className="profile-photo-comments" src={this.props.image} alt=""/>

                    ) : (
                        <i className="fas fa-user-circle fa-2x no-user-icon"/>
                    )}
                </a>

                <div className="media-body">
                    <h6 className="media-heading user_name">{this.props.name}</h6>
                    {this.props.commentBody}
                    <div>
                        <small>
                            {/*<a href="#" className="like-comment">*/}
                                {/*<i className="fa fa-thumbs-up"/> Like*/}
                            {/*</a>*/}
                            <p className="pull-right">
                                <small>{this.props.date.slice(0, 10)}</small>
                            </p>
                        </small>
                    </div>
                </div>
            </div>
                <hr/>
            </div>
        );
    }
}

export default Comment;
