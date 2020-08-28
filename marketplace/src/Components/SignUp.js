import React, {useState} from "react";
import {Link} from 'react-router-dom';
import {axiosAuth} from '../utils/axiosAuth';


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
        axiosAuth()
        .post('auth/register', signUpInfo)
        .then(res => {
            console.log(res)
            props.history.push('/');
        })
        .catch(err => console.log(err));  
    };

    return (
        <div className='login'>
            <h1 className="headline">Welcome to the African Marketplace!</h1>
            <form onSubmit={handleSubmit}>
                <input
                label='Name'
                id='name'
                name='name'
                placeholder='Name'
                onChange={handleChange}
                className="input"
                ></input>
                <br/>
                <input
                label='Email'
                id='email'
                name='email'
                placeholder='Email'
                onChange={handleChange}
                className="input"
                ></input>
                <br/>
                <input
                label='Username'
                id='username'
                name='username'
                placeholder='Username'
                onChange={handleChange}
                className="input"
                ></input>
                <br/>
                <input
                label='Password'
                id='password'
                name='password'
                placeholder='Password'
                onChange={handleChange}
                className="input"
                ></input>
                <br/>
                <br/>
                <button>Sign Up</button>
            </form>

            Already have an account <Link to='/login'>Log In</Link>
        </div>
    );
};

export default SignUp;

