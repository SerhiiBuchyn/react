import React from 'react';

import './Post.css';

const Post = ({post}) => {
    return (
        <div className="post d-flex border-style">
            <p>UserId: {post.userId} -- PostId: {post.id}</p>
            <p>{post.title}</p>
            <p>{post.body}</p>
        </div>
    );
};

export default Post;