import React, {useEffect, useState} from 'react';
import {getUsers} from "../../service/user.services";
import User from '../User/User';

const Users = ({getUserId, getData}) => {

    const [users, setUsers] = useState([]);

    useEffect(() => {
        getUsers().then(response => setUsers(response));
    }, []);

    return (
        <div className="users__wrapper">
            {users.map((value) => (<User key={value.id} data={value} getUserId={getUserId} getData={getData}/>))}
        </div>
    );
};

export default Users;