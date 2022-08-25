import React, {useEffect, useState} from 'react';

import {getUser} from "../../service/user.services";
import Details from "../Details/Details";

const UserDetails = ({userId}) => {

    const [user, setUser] = useState(null);

    useEffect(() => {
        getUser(userId).then((response) => setUser(response));
    }, [userId]);

    return (
        <div className="user_details">
            {user && (<Details userId={userId} user={user}/>)}
        </div>
    );
};

export default UserDetails;