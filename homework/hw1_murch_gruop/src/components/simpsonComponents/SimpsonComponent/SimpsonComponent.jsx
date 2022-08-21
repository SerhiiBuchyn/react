import React from 'react';
import SimpsonCharacter from "../SimpsonCharacter/SimpsonCharacter";

const SimpsonComponent = () => {
    return (
        <div className="simpson__wrapper">
            <SimpsonCharacter
                name={"Bart"}
                surname={"Simpson"}
                photo={"https://upload.wikimedia.org/wikipedia/uk/a/aa/Bart_simpson.png"}/>
            <SimpsonCharacter
                name={"Homer"}
                surname={"Simpson"}
                photo={"https://upload.wikimedia.org/wikipedia/uk/0/02/Homer_Simpson_2006.png"}/>
            <SimpsonCharacter
                name={"Marge"}
                surname={"Simpson"}
                photo={"https://upload.wikimedia.org/wikipedia/ru/0/0b/Marge_Simpson.png"}/>
            <SimpsonCharacter
                name={"Lisa"}
                surname={"Simpson"}
                photo={"https://upload.wikimedia.org/wikipedia/ru/e/ec/Lisa_Simpson.png"}/>
            <SimpsonCharacter
                name={"Maggie"}
                surname={"Simpson"}
                photo={"https://upload.wikimedia.org/wikipedia/ru/9/9d/Maggie_Simpson.png"}/>


        </div>

    );
};

export default SimpsonComponent;