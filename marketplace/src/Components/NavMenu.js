import React from "react";
import {Link} from 'react-router-dom';

const NavMenu = () => {
    
    const signOut = () => {
        window.localStorage.removeItem('token');
    }

    return (
    <div className='header'>
        <a href="/">Home</a> | 
        <a href="/login">Login</a> | 
        <a href="/signup">Register</a>
        <Link to='/add'>Add Item</Link>
        <Link to='/marketplace'>MarketPlace</Link>
        <Link to='/login' onClick={signOut}>Sign Out</Link>
    </div>
        )
}

export default NavMenu