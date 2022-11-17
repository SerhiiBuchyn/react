import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";

import {axiosServices} from "../../../services";
import PostDescription from "../postDescription/PostDescription";

const PostDetails = () => {
    const [post, setPost] = useState({});
    const postId = useParams();

    useEffect(() => {
        axiosServices.getSinglePost(postId.id).then(value => setPost(value.data));
    }, [postId]);

    return (
        <div className="post__details">
            {/*{post.map(value => <PostDescription post={value}/>)}*/}
            {JSON.stringify(post)}
        </div>
    );
};

export default PostDetails;