// import React from 'react';
//
// import './App.css';
// import {useForm} from "react-hook-form";
// import {savePost} from "./services/axios.service/axios.service";


// // the 1st variant.
//
// import {useState} from "react";
//
// function App() {
//
// const [login, setLogin] = useState('');
// const [password, setPassword] = useState('');
//
// const onChangeLogin = (e) => setLogin(e.target.value);
// const onChangePassword = (e) => setPassword(e.target.value);
//
// const onSubmit = (e) => {
//     console.log(e.target.login.value);
//     console.log(e.target.password.value);
//     e.preventDefault();
// }
//
//the 2nd variant.
//
// const [form, setForm] = useState({login: '', password: ''});
//
// const onSubmit = (e) => {
//     console.log(form);
//     e.preventDefault();
// }
//
// const onChange = (e) => setForm({...form, [e.target.name]: e.target.value});
// return (
//     <div className="App">
// {/* the 1st and 2nd variant.*/
// }
// {/**/
// }
// {/*<form onSubmit={onSubmit}>*/
// }
// {/*    <input name={"login"} type="text" value={form.login} onChange={onChange}/>*/
// }
// {/*    <input name={"password"} type="text" value={form.password} onChange={onChange}/>*/
// }
// {/*    <button>Save</button>*/
// }
// {/*</form>*/
// }
// {/*    */
// }
//         </div>
//     );
// }
// export default App;

// forms method: post with fetch http request.
//
// import {useForm} from "react-hook-form";
//
// const App = () => {
//
//     const {register, handleSubmit, formState: {errors}} = useForm({
//         defaultValues: {
//             title: 'title default',
//             body: 'body default'
//         }
//     });
//
//     const onSubmit = (data) => {
//         fetch('https://jsonplaceholder.typicode.com/posts', {
//             method: 'POST',
//             body: JSON.stringify(data),
//             headers: {
//                 'Content-type': 'application/json; charset=UTF-8',
//             },
//         })
//             .then((response) => response.json())
//             .then((json) => console.log(json))
//     }
//
//     return (
//         <div>
//             <form onSubmit={handleSubmit(onSubmit)}>
//                 <input {...register('title', {required: true})}/>
//                 {errors.title && <span>field is required</span>}
//                 <input {...register('body', {required: true})}/>
//                 <input type="submit" value={'save post'}/>
//
//                 <select {...register("userId")}>
//                     <option value="1">1</option>
//                     <option value="2">2</option>
//                     <option value="3">3</option>
//                     <option value="4">4</option>
//                     <option value="5">5</option>
//                 </select>
//             </form>
//         </div>
//     );
// };
//
// export default App;


// const App = () => {
//
//     const {register, handleSubmit, formState: {errors}} = useForm({defaultValues: {title: 'title default'}});
//
//     const onSubmit = (data) => {
//         savePost(data).then(data => console.log(data))
//     };
//
//     return (
//         <div>
//             <form onSubmit={handleSubmit(onSubmit)}>
//                 <input {...register('title', {required: true})}/>
//                 {errors.title && <span>filed in required</span>}
//                 <input {...register('body')}/>
//                 <input type="submit" value={'save post'}/>
//
//                 <select {...register("userId")}>
//                     <option value="1">1</option>
//                     <option value="2">2</option>
//                     <option value="3">3</option>
//                 </select>
//             </form>
//         </div>
//     )
// };
//
// export default App;


configs files and ulrs

const baseUrl = 'https://jsonplaceholder.typicode.com';
export default baseUrl;

export const urls = {
comments:'/comments'
}


 axios.services

import axios from 'axios';

import baseUrl from "../../configs/urls";
import {urls} from "../../configs/urls";

const axiosInstance = axios.create({
baseURL: baseUrl,
headers: {'Content-type': 'application/json; charset=UTF-8'}
});

const savePost = (data) => axiosInstance.post(`${urls.comments}`, {data: data});

export {savePost};