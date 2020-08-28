import React from 'react';

export default function ItemCard({item}) {

    const {name, price, category, location, description} = item;

    return (
        <div className="card">
            <h1>Item: {name}</h1>
            <h3>Price: ${price}</h3>
            <h3>Category: {category}</h3>
            <h3>Location: {location}</h3>
            <h3>Description: {description}</h3>
        </div>
    )
}