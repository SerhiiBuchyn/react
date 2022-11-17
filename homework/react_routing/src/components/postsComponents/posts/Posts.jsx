import React, {useEffect, useState} from 'react';
import {Outlet} from "react-router-dom";

import {axiosServices} from "../../../services";
import Post from "../post/Post";

const Posts = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        axiosServices.getAllPosts().then(value => setPosts(value.data))
    }, []);

    return (
        <div className="posts__wrapper">
            <div className="post__details">
                <Outlet/>
            </div>

            <hr/>

            <div className="posts">
                {
                    posts.map(value => <Post key={value.id} post={value}/>)
                }
            </div>
        </div>
    )
};

export default Posts;