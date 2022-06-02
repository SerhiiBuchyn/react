import React, { useState } from "react";

import Users from "./components/Users/Users";
import UserDetails from "./components/UserDetails/UserDetails";
import Posts from "./components/Posts/Posts";
import "./App.css";

const App = () => {
  const [userId, setUserId] = useState(null);

  const [showPosts, setShowPosts] = useState(false);

  const getUserId = (userId) => setUserId(userId);

  return (
    <div className="wrap">
      <div className="users_wrap">
        <Users getUserId={getUserId} />
        {userId && (<UserDetails userId={userId}
            getUserId={getUserId}
            setShowPosts={setShowPosts}
          />
        )}
      </div>
      <div className="posts_wrap">{showPosts && <Posts userId={userId} />}</div>
    </div>
  );
};

export default App;
