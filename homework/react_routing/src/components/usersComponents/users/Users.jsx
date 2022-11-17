import React, {useEffect, useState} from 'react';
import {Outlet} from "react-router-dom";

import {axiosServices} from "../../../services";
import User from "../user/User";

const Users = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        axiosServices.getAllUser().then(value => setUsers(value.data))
    }, []);

    return (
        <div className="users__wrapper">
            <div className="users">
                {
                    users.map(value => <User key={value.id} user={value}/>)
                }
            </div>

            <hr/>

            <div className="details__wrapper">
                <h4>User details</h4>
                <Outlet/>
            </div>
        </div>
    )
};

export default Users;