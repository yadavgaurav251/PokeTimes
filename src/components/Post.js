import React, { Component } from "react";
import axios from "axios";

class Post extends Component {
  state = [
    {
      post: null,
    },
  ];
  componentDidMount() {
    let id = this.props.match.params.post_id;
    console.log(id);
    axios
      .get("https://jsonplaceholder.typicode.com/posts/" + id)
      .then((res) => {
        this.setState({
          post: res.data,
        });
        console.log(res);
      });
  }

  render() {
    const post = this.state.post ? (
      <div className="post">
        <div className="center">
        <h3>{this.state.post.title}</h3> 
        <p>{this.state.post.body}</p>
        </div>
      </div>
    ) : (
      <div className="center"> Loading post ......</div>
    );
    return (
      <div className="container">
        {post}
      </div>
    );
  }
}
export default Post;
