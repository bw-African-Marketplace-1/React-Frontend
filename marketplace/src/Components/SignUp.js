import React, {useState} from "react";
import {Link} from 'react-router-dom';
// import {axiosWithAuth} from '../utils/axiosAuth';
import axios from "axios";

const SignUp = props => {
    const [signUpInfo, setSignUpInfo] = useState({
        name: '',
        email: '',
        username: '',
        password: ''
    })

    const handleChange = e => {
        setSignUpInfo({ ...signUpInfo, [e.target.name]: e.target.value});
    };

    const handleSubmit = e => {
        e.preventDefault();
        setSignUpInfo({...signUpInfo});
        axios
        .post('/auth/register', signUpInfo)
        .then(res => {
            props.history.push('/');
        })
        .catch(err => console.log(err));  
    };

    return (
        <div>
            <h1>Welcome to the African Marketplace!</h1>
            <h3>Sign Up</h3>
            <form onSubmit={handleSubmit}>
                <input
                label='Name'
                id='name'
                name='name'
                placeholder='name'
                onChange={handleChange}
                ></input>
                <br/>
                <input
                label='Email'
                id='email'
                name='email'
                placeholder='email'
                onChange={handleChange}
                ></input>
                <br/>
                <input
                label='Username'
                id='username'
                name='username'
                placeholder='username'
                onChange={handleChange}
                ></input>
                <br/>
                <input
                label='Password'
                id='password'
                name='password'
                placeholder='password'
                onChange={handleChange}
                ></input>
                <br/>
                <br/>
            </form>

            Already have an account <Link to='/login'>Log In</Link>
        </div>
    );
};

export default SignUp;