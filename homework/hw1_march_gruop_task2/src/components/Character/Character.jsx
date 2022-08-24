import React from 'react';

const Character = ({data}) => {

    return (
        <div className="character">
            <h5>{data.id} -- {data.name} -- {data.status}</h5>
            <h5>{data.species} -- {data.gender}</h5>
            <img src={data.image} alt=""/>
        </div>
    );
};

export default Character;