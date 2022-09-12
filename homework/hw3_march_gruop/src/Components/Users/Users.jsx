import React, {useEffect, useState} from 'react';

import {getUser} from "../../services/users.service";
import User from "../User/User";

const Users = ({getUserId}) => {

    const [users, setUsers] = useState([]);

    useEffect(() => {
        getUser().then(response => setUsers([...response.data]))
    }, []);

    return (
        <div className="users_wrapper">
            {users.map(value => <User
                key={value.id}
                user={value}
                getUserId={getUserId}
            />)}
        </div>
    );
};

export default Users;