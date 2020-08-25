import React, {useState} from 'react';
import {axiosAuth} from '../utils/axiosAuth';

const AddItem = (props) => {
    const [item, setItem] = useState({
        item: '',
        price: '',
        category: '',
        location: '',
        description: ''
    })

    const handleChanges = (e) => {
        setItem({...item, [e.target.name]: e.target.value})
        console.log(item)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        axiosAuth()
        .post('forsale', item)
        .then(res => {console.log(res.data)})
        .catch(err => console.log(err))
        props.history.push('/marketplace')
    }

    return(
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="item">Name</label>
                <input 
                    onChange={handleChanges}
                    type='text'
                    value={item.item}
                    placeholder="Name"
                    name="item"
                    required>
                </input>

                <label htmlFor="price">Price</label>
                <input 
                    onChange={handleChanges}
                    type='number'
                    value={item.price}
                    placeholder="Price"
                    name="price"
                    required>
                </input>

                <label htmlFor="category">Category</label>
                <input 
                    onChange={handleChanges}
                    type='text'
                    value={item.category}
                    placeholder="Category"
                    name="category"
                    required>
                </input>

                <label htmlFor="location">Location</label>
                <input 
                    onChange={handleChanges}
                    type='text'
                    value={item.location}
                    placeholder="Location"
                    name="location"
                    required>
                </input>

                <label htmlFor="description">Description</label>
                <input 
                    onChange={handleChanges}
                    type='text'
                    value={item.description}
                    placeholder="Description"
                    name="description"
                    required>
                </input>
            <button>Add Item</button>
            </form>
        </div>
    )
 }

 export default AddItem