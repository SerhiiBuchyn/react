import React from 'react';

import './Rocket.css';

const Rocket = ({data}) => {
    return (
        <div className="rocket d-flex">
            <div className="rocket__container d-flex">
                <h2 className="description__style">Mission name: {data.mission_name}</h2>
                <div className="img__container">
                    <img className="rocket__logo__img" src={data.links.mission_patch_small} alt={data.mission_name}/>
                </div>
                <h2 className="description__style">Launch year: {data.launch_year}</h2>
            </div>

        </div>
    );
};

export default Rocket;