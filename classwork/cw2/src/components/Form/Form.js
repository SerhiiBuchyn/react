import React, {useState} from 'react';

import './Form.css'

const Form = ({getFilter}) => {

    const [form, setForm] = useState({name: "", username: "", email: ""});

    // // btn filter
    // const onSubmit = (e) => {
    //     e.preventDefault();
    //     getFilter(form)
    //     console.log(form, 'btn');
    // }

    const onChange = (e) => {
        const evenData = {...form, [e.target.name]: e.target.value};
        setForm({...form, ...evenData});
        getFilter(evenData);
    }

    return (
        <div className="form_container">
            <form className="form" >
                <label>Name: <input name="name" type="text" value={form.name} onChange={onChange}/></label>
                <label>Username: <input name="username" type="text" value={form.username} onChange={onChange}/></label>
                <label>Email: <input name="email" type="text" value={form.email} onChange={onChange}/></label>

                {/*<button onClick={onSubmit}>Filter</button>*/}

            </form>
        </div>
    );
};

export default Form;