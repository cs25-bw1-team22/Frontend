import React, { useState, useEffect } from "react";
import axios from 'axios';

const Register = (props) => {

const [creds, setCreds] = useState({username: "", password: ""});
const handleChange = event => {
    setCreds({...creds, [event.target.name]: event.target.value});
};

const handleSubmit = event => {
    event.preventDefault();
    axios.post('https://lambda-mud-test.herokuapp.com', creds)
    .then(res => {console.log(res);
        localStorage.setItem('token', res.data.token);
        props.history.push('/Game-Page');
    })
    .catch(err => console.log(err.response));
}

 
  return (
    <>

    <h1>Register Now!</h1>

      <form onSubmit={handleSubmit}>

    <h1>Test</h1>

<input type='text' name='username' placeholder='username' onChange={handleChange} value={creds.username}/>

<input type='password' name='password' placeholder='password' onChange={handleChange} value={creds.password}/>

<button type='submit'>Submit</button>

    </form>
    </>
  );
};

export default Register;