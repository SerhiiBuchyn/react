// import React, {useEffect, useState} from 'react';

// import {getUser} from "../../service/user.services";
// import Details from "../Details/Details";

// in the comments it first variant how I can pass data with help state lifting. !!!!!!!!!!!!!

const UserDetails = ({userId, data}) => {

    // const [user, setUser] = useState(null);
    //
    // useEffect(() => {
    //     getUser(userId).then((response) => setUser(response));
    // }, [userId]);

    return (
        <div className="user_details">

            {data && (<div>{data.id}--{data.name}</div>)}

            {/*{user && (<Details userId={userId} user={user}/>)}*/}

        </div>

    );
};

export default UserDetails;