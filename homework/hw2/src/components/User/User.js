import React from "react";

import "./User.css";

const User = ({ user, getUserId }) => {
  const userId = user?.id;

  return (
    <div className="user">
      <h4 className="description">
        {user.id} - {user.name}
      </h4>
      <button className="user_btn" onClick={() => getUserId(userId)}>
        Get's details
      </button>
    </div>
  );
};

export default User;
