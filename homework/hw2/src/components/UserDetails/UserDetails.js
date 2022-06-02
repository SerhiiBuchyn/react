import React, { useEffect, useState } from "react";

import { getUser } from "../../services/user.services";
import Details from "../Details/Details";
import "./UserDetails.css";

const UserDetails = ({ userId, getUserId, setShowPosts }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    getUser(userId).then((value) => setUser(value));
  }, [userId]);

  return (
    <div className="details_wrap">
      {user && (
        <Details
          userId={userId}
          user={user}
          getUserId={getUserId}
          setShowPosts={setShowPosts}
        />
      )}
    </div>
  );
};

export default UserDetails;
