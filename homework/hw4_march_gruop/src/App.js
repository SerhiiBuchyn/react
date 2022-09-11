import React from "react";

import User from "./components/User/User";
import Comment from "./components/Comment/Comment";

const App = () => {
    return (
        <div className="app__wrapper">

            <User/>

            <hr></hr>

            <Comment/>

        </div>
    );
};

export default App;