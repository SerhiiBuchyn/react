import React, {useEffect, useState} from 'react';

import {axiosServices} from "../../../services";
import User from "../user/User";

const Users = () => {

    const [users, setUsers] = useState([]);

    useEffect(() => {
        axiosServices.getAll().then(value => setUsers(value.data))
    }, [])

    return (
        <div>
            {
                users.map(value => <User key={value.id} user={value}/>)
            }
        </div>
    );
};

export default Users;