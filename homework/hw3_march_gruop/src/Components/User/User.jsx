import React from 'react';

import './User.css';

const User = ({user, getUserId}) => {
    return (
        <div className="user d-flex border-style">
            <h3>{user.id} - {user.name}</h3>
            <button className="user__btn border-style"
                    onClick={() => getUserId(user.id)}>
                Get's posts
            </button>
        </div>
    );
};

export default User;