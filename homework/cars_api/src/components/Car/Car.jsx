import React from "react";

import "./Car.css";

const Car = ({car, deleteCar, setCarForUpdate}) => {
    return (
        <div className="car__container">
            <div className="car">
                <p>ID: {car.id}</p>
                <p>Model: {car.model}</p>
                <p>Year: {car.year}</p>
                <p>Price: {car.price}</p>
            </div>
            <div className="car__btn">
                <button onClick={() => setCarForUpdate(car)} className="btn">Edit</button>
                <button onClick={() => deleteCar(car.id)} className="btn">Delete</button>
            </div>
        </div>
    )
};

export default Car;