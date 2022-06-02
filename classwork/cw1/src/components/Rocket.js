import React from 'react';

const Rocket = ({data: {mission_name, launch_year, links: {mission_patch_small}}}) => <div className="mission">
    <div className="description">
        <h2 className="mission_name">{mission_name}</h2>
        <p className="launch_year">{launch_year}</p>
    </div>
    <div className="wrap_img">
        <img className="img_ships"
             src={mission_patch_small} alt="logo"/>
    </div>
</div>


export default Rocket;