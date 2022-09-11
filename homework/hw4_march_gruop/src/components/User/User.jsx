import {useForm} from "react-hook-form";

import {saveUser} from "../../services/users.service/user.service";

const User = () => {

    const {register, handleSubmit, formState: {errors}} = useForm(
        {
            defaultValues: {
                name: "name",
                username: "username"
            }
        });

    const userOnSubmit = (user) => {
        const id = Math.floor(Math.random() * 11);
        saveUser(user, id).then(user => console.log({...user, id}));
    }

    return (
        <div className="user__wrapper">
            <form onSubmit={handleSubmit(userOnSubmit)}>

                <input {...register("name", {required: true})}/>
                {errors.name && <span>filed in required</span>}

                <input {...register("username", {required: true})}/>
                {errors.username && <span>filed in required</span>}

                <button>
                    save user
                </button>
            </form>
        </div>
    )
};

export default User;