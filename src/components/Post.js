import React, { Component } from "react";
import { connect } from "react-redux";
import { deletePost } from "../actions/postActions";
class Post extends Component {
  handleClick = () => {
    this.props.deletePost(this.props.post.id);

    this.props.history.push("/");
  };

  render() {
    const post = this.props.post ? (
      <div className="post">
        <div className="center">
          <h3>{this.props.post.title}</h3>
          <p>{this.props.post.body}</p>
          <div className="center">
            <button className="grey btn" onClick={this.handleClick}>
              {" "}
              Delete Post
            </button>
          </div>
        </div>
      </div>
    ) : (
      <div className="center"> Loading post ......</div>
    );
    return <div className="container">{post}</div>;
  }
}

const mapStateToProps = (state, ownProps) => {
  let id = ownProps.match.params.post_id;
  return {
    post: state.posts.find((post) => post.id === id),
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    deletePost: (id) => {
      dispatch(deletePost(id));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Post);
