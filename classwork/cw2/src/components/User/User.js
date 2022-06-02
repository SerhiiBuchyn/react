import React from 'react';

import './User.css';

const User = ({user}) => {
    return (
        <div className="user">
            <h5 className="user_description">{user.id} - {user.name} - {user.username} - {user.email}</h5>
        </div>
    );
};

export default User;