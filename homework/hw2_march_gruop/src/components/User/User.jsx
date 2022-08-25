import React from 'react';

const User = ({data, getUserId}) => {

    return (
        <div className="user">
            <h3>{data.id} -- {data.name}</h3>
            <button onClick={() => {
                getUserId(data.id)
            }}>
                Get's details
            </button>
        </div>
    );
};

export default User;