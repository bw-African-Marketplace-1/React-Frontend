import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import {axiosAuth} from '../utils/axiosAuth';


export default function Login(props) {

    const [login, setLogin] = useState({
        username: '',
        password: ''
    })

    const handleChange = (e) => {
        setLogin({
            ...login,
            [e.target.name]: e.target.value
        })
        console.log(login)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        axiosAuth()
        .post('auth/login', login)
        .then(res => {
            console.log(res);
            window.localStorage.setItem('token', res.data.token)
            props.history.push('/marketplace')
        })   
    }

    return(
        <div className="login">
            <h1 className="headline">Welcome to the African Marketplace!</h1>
            <form onSubmit={handleSubmit}>
                <input
                type='text'
                name='username'
                label='username'
                value={login.username}
                onChange={handleChange}
                placeholder="Username"
                className='input'
                ></input>

                <input
                type="password"
                name="password"
                label='password'
                value={login.password}
                onChange={handleChange}
                placeholder="Password"
                className='input'
                ></input>

                <button>Login</button>
            </form>
            New to the Marketplace?<Link to='/signup'>Sign Up</Link>
        </div>
    )
}