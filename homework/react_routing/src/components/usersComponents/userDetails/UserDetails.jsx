import React from 'react';
import {useLocation} from "react-router-dom";

const UserDetails = () => {
    const location = useLocation()
    const {state: user} = location;

    return (
        <div className="user__details">
            <p>{user.id} -- {user.name} -- {user.email}</p>
        </div>
    )
};

export default UserDetails;