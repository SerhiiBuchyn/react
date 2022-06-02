import React, { useEffect, useState } from "react";

import { getUsers } from "../../services/user.services";
import User from "../User/User";
import "./Users.css";

const Users = ({ getUserId }) => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getUsers().then((value) => setUsers(value));
  }, []);

  return (
    <div className="users">
      {users.map((value) => (
        <User key={value.id} user={value} getUserId={getUserId} />
      ))}
    </div>
  );
};

export default Users;
