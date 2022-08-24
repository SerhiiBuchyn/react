import {useState} from "react";

import Users from './components/Users/Users';
import UserDetails from "./components/UserDetails/UserDetails";
import './App.css';

function App() {

    const [userId, setUserId] = useState(null);

    const getUserId = (userId)=> setUserId(userId);
    console.log(userId);

    return (
        <div className="wrapper">
            <Users getUserId={getUserId}/>
            {userId && <UserDetails/>}
        </div>
    );
}

export default App;
