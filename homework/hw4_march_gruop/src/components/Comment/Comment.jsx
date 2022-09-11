import React from "react";
import {useForm} from "react-hook-form";

import {saveComment} from "../../services/comments.servie/comment.service";

const Comment = () => {

    const {register, handleSubmit, formState: {errors}} = useForm({
        defaultValues: {
            name: "name",
            email: "email",
            body: "body"
        }
    });

    const commentOnSubmit = (comment) => saveComment(comment);

    return (
        <div className="comment__wrapper">
            <form onSubmit={handleSubmit(commentOnSubmit)}>

                <input {...register("name", {required: true})}/>
                {errors.name && <span>Filed is required</span>}

                <input {...register("email", {required: true})}/>
                {errors.email && <span>Filed is required</span>}

                <input {...register("body", {required: true})}/>
                {errors.body && <span>Filed is required</span>}

                <select {...register("userId")}>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                </select>

                <input type="submit" value={"save comment"}/>
            </form>
        </div>
    )
};

export default Comment;