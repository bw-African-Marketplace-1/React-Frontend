import React from 'react';

export default function BusinessCard({business}) {

    const {name, user_id, location, description} = business;

    return (
        <div className="card">
            <h1>Business: {name}</h1>
            <h3>User ID: {user_id}</h3>
            <h3>Location: {location}</h3>
            <h3>Description: {description}</h3>
        </div>
    )
}