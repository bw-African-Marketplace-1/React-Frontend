import React from 'react';

export default function ItemCard({item}) {

    const {name, price, category, location, description} = item;

    return (
        <div className="card">
            <h1>{name}</h1>
            <h1>{price}</h1>
            <h3>{category}</h3>
            <h3>{location}</h3>
            <h3>{description}</h3>
        </div>
    )
}