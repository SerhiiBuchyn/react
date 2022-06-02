import React, {useEffect, useState} from "react";
import Rocket from "../components/Rocket";

export default function Rockets() {
    const [rockets, setRockets] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        fetch('https://api.spacexdata.com/v3/launches/')
            .then(response => response.json())
            .then(rocket => {
                setLoading(false);
                setRockets(rocket.filter(rocket => rocket.launch_year !== '2020'))
            });
    }, []);

    return (<div className="wrap">
        {loading && 'Loading...'}
        {rockets.map(rocket => <Rocket key={rocket.flight_number} data={rocket}/>)}
    </div>);
}


