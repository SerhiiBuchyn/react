import React from "react";
import '../App.css'

const RocketItem = ({data, rockets, setRockets}) => {

    const removeItem = () => {
        const updatedRockets = rockets.filter(({flight_number}) => flight_number !== data.flight_number)
        setRockets(updatedRockets)
    }

    return (
        <div className="mission" key={data.flight_number} onClick={() => console.log(data)}>
            <div className="description">
                <h2 className="mission_name">{data.mission_name}</h2>
                <p className="launch_year"> {data.launch_year}</p>
                <button onClick={removeItem}>
                    Remove rocket
                </button>
            </div>
            <img src={data.links.mission_patch_small} alt="logo"/>
        </div>
    )
}

export default RocketItem