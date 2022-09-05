import React, {useEffect, useState} from 'react';

import {getPosts} from "../../services/posts.service";
import Post from "../Post/Post";

const Posts = ({userId}) => {

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        getPosts(userId).then(response => setPosts([...response.data]))

    }, [userId]);

    return (
        <div className="posts__wrapper">
            {posts.map(post => <Post
                key={post.id}
                post={post}
            />)}
        </div>
    );
};

export default Posts;