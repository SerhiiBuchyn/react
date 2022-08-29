import React, {useEffect, useState} from 'react';

import {getRockets} from "../../service/rocket.services";
import Rocket from "../Rocket/Rocket";
import './Rockets.css'

const Rockets = () => {

    const [rockets, setRockets] = useState([]);

    useEffect(() => {
        getRockets().then(rocket => setRockets(rocket.filter(rocket => rocket.launch_year !== "2020")))
    }, []);

    return (
        <div className="rockets__wrapper d-flex">
            {rockets.map((value) => (<Rocket key={value.flight_number} data={value}/>))}
        </div>
    );
};

export default Rockets;