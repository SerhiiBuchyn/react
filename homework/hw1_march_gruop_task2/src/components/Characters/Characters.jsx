import React, {useEffect, useState} from 'react';

import {getCharacters} from "../../services/characters.services";
import Character from '../Character/Character';

const Characters = () => {

    let [characters, setCharacters] = useState([]);

    useEffect(() => {
        getCharacters().then(value => setCharacters(value));
    }, []);

    return (
        <div>
            {characters.map((value) => (
                <Character key={value.id} data={value}/>
            ))}
        </div>
    );
};

export default Characters;