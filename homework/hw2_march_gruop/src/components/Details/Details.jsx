import React from 'react';

const Details = ({userId,user}) => {
    console.log(user);
    return (
        <div>
            <h4>{user.id}--{user.name}--{user.email}</h4>
        </div>
    );
};

export default Details;