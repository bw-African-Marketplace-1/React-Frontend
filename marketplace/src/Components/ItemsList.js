import React from 'react';

import ItemCard from './ItemCard';

export default function ItemList({items}) {

    return (
        <div className="card-container">
            {items.map(item => (
                <ItemCard key={item.id} item={item} />
            ))}
        </div>
    )
}