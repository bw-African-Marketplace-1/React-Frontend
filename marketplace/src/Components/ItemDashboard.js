import React, {useState, useEffect} from "react";

import ItemForm from './ItemForm';
import ItemList from './ItemsList';
import {axiosAuth} from '../utils/axiosAuth';

export default function ItemDashboard() {

    const [items, setItems] = useState([]);
    const [dependency, setDependency] = useState(false)

    useEffect(() => {
        axiosAuth()
        .get('items')
        .then(res => {
            setItems(res.data)
            setDependency(false)
        })
        .catch(err => {
            console.log(err.response)
        })
    }, [dependency])

    return(
        <div className="dash">
            <ItemForm items={items} updateItems={setItems} setDependency={setDependency} />
            <ItemList items={items} />
        </div>
    )
}