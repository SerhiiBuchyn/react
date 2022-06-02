import React, { useEffect, useState } from "react";

import { getPosts } from "../../services/user.services";
import Post from "../Post/Post";

const Posts = ({ userId }) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    getPosts(userId).then((res) => setPosts([...res]));
  }, [userId]);

  return (
    <div className="posts_wrap">
      {posts.map((res) => (
        <Post key={res.id} post={res} userId={userId} />
      ))}
    </div>
  );
};

export default Posts;
