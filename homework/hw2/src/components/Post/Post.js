import React from "react";

import "./Post.css";

const Post = ({ post: { id, userId, title, body } }) => {
  return (
    <div className="post">
      <h4 className="description">
        Id: {id} - userId: {userId}
      </h4>
      <h4 className="description">title: {title}</h4>
      <p>
        <strong>body</strong>: {body}
      </p>
    </div>
  );
};

export default Post;
