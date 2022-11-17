import React from 'react';
import {useNavigate} from 'react-router-dom';

const Post = ({post}) => {
    const navigate = useNavigate();

    return (
        <div className="post">
            <p>{post.id}  {post.title}</p>
            <button onClick={() =>navigate(post.id.toString())}>get post details</button>
        </div>
    )
};

export default Post;