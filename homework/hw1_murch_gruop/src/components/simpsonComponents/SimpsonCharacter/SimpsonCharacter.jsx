import React from 'react';

import './SimpsonCharacter.css';

const SimpsonCharacter = ({name, description, photo}) => {
    return (
        <div className="simpson__character d-flex">
            <h2 className="title">{name}</h2>
            <p className="description">{description}</p>
            <div className="img__container">
                <img className="simpson__img" src={photo} alt="logo"/>
            </div>
        </div>
    );
};

export default SimpsonCharacter;