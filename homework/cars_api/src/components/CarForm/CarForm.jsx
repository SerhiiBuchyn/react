import React, {useEffect} from "react";
import {useForm} from "react-hook-form";

import {carService} from "../../services";

const CarForm = ({addCar, carForUpdate, updateCar}) => {

    const {register, handleSubmit, reset, setValue, formState: {errors}} = useForm({mode: 'all'});

    useEffect(() => {
        if (carForUpdate) {
            setValue('model', carForUpdate.model)
            setValue('price', carForUpdate.price)
            setValue('year', carForUpdate.year)
        }
    }, [carForUpdate]);

    const submit = async (newCar) => {
        if (!carForUpdate) {
            const {data} = await carService.create(newCar);
            addCar(data);
            // reset()
        } else {
            const {data} = await carService.updateById(carForUpdate.id, newCar)
            updateCar(data)
        }
        reset()
    }

    return (
        <div className="form__wrapper">
            <form onSubmit={handleSubmit(submit)}>

                <input {...register('model', {
                    required: true,
                    pattern: new RegExp(/^[a-zA-ZА-яіІїЇьЬєЄ]{1,20}$/)
                })}
                       placeholder={'model'} type="text"/>

                <input {...register('price', {
                    valueAsNumber: true,
                    required: true,
                    min: 0,
                    max: 1000000
                })}
                       placeholder={'price'} type="number"/>

                <input {...register('year', {
                    valueAsNumber: true,
                    required: true,
                    min: 1990,
                    max: new Date().getFullYear()
                })}
                       placeholder={'year'} type="number"/>

                <button>{carForUpdate ? "Edit" : "Save"}</button>

            </form>
            <div>
                {errors.model && <span>Only alpha min 1 max 20 ch</span>}
                {errors.year && <span>min 1990 max current year</span>}
                {errors.price && <span>min 0 max 1 000 000</span>}
            </div>
        </div>
    )
};

export default CarForm;