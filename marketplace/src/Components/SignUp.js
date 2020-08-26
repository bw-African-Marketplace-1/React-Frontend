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
                <button>Sign Up</button>
            </form>

            Already have an account <Link to='/login'>Log In</Link>
        </div>
    );
};

export default SignUp;


// import axios from 'axios';

// export const FETCH_MARKET_DATA = 'FETCH_MARKET_DATA'
// export const FETCH_MARKET_SUCCESS = 'FETCH_MARKET_SUCCESS'
// export const FETCH_MARKET_FAIL = 'FETCH_MARKET_FAIL'

// export const fetchMarket = () => (dispatch) => {
//     distpatch({type:FETCH_MARKET_DATA})
//     axios.get('forsale')
//     .then(res => {
//         console.log('get', res.data);
//         dispatch({type: FETCH_MARKET_SUCCESS, payload: res.data})
//     })
//     .catch(err => {
//         console.log('error', err);
//         dispatch({type: FETCH_MARKET_FAIL, payload: err})
//     })
// }

// make reducers