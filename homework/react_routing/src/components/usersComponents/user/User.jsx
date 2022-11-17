import React from 'react';
import {Link} from "react-router-dom";

const User = ({user}) => {
    return (
        <div className="user">
            <p>{user.id} - {user.name} <Link to={user.id.toString()} state={{...user}}>details</Link></p>
        </div>
    )
};

export default User;