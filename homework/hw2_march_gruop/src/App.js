import {useState} from "react";

import Users from './components/Users/Users';
import UserDetails from "./components/UserDetails/UserDetails";
import './App.css';

function App() {

    const [userId, setUserId] = useState(null);

    const getUserId = (userId) => setUserId(userId);

    const [data, setData] = useState(null);

    const getData = (data)=>setData(data);

    return (
        <div className="wrapper">
            <Users
                getUserId={getUserId}
                getData={getData}
            />

            {userId && <UserDetails
                data={data}
                userId={userId}
            />}
        </div>
    );
}

export default App;
