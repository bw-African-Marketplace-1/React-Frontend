import React from "react";
import {Link} from 'react-router-dom';

const NavMenu = () => {
    
    const signOut = () => {
        window.localStorage.removeItem('token');
    }

    return (
    <div className='header'>
        <Link className="nav-link" to="/">Home</Link> | 
        <Link className="nav-link" to="/login">Login</Link> | 
        <Link className="nav-link" to="/signup">Register</Link> |
        <Link className="nav-link" to='/add'>Add Item</Link> |
        <Link className="nav-link" to='/addBusiness'>Add Business</Link> |
        <Link className="nav-link" to='/marketplace'>MarketPlace</Link> |
        <Link className="nav-link" to='/contributors'>Contributors</Link> |
        <Link className="nav-link" to='/login' onClick={signOut}>Sign Out</Link>
    </div>
        )
}

export default NavMenu