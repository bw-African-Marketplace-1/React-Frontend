import React, {useState} from 'react';
import {axiosAuth} from '../utils/axiosAuth';

const AddBusiness = (props) => {
    const [business, setBusiness] = useState({
        name: '',
        location: '',
        description: '',
        user_id: ''
    })

    const handleChanges = (e) => {
        setBusiness({...business, [e.target.name]: e.target.value})
        console.log(business)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        axiosAuth()
        .post('business', business)
        .then(res => {console.log(res.data)})
        .catch(err => console.log(err))
        props.history.push('/marketplace')
    }

    return(
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Name</label>
                <input 
                    onChange={handleChanges}
                    type='text'
                    value={business.name}
                    placeholder="Name"
                    name="name"
                    required>
                </input>

                <label htmlFor="user_id">Id Number</label>
                <input 
                    onChange={handleChanges}
                    type='number'
                    value={business.user_id}
                    placeholder="ID"
                    name="user_id"
                    required>
                </input>

                <label htmlFor="location">Location</label>
                <input 
                    onChange={handleChanges}
                    type='text'
                    value={business.location}
                    placeholder="Location"
                    name="location"
                    required>
                </input>

                <label htmlFor="description">Description</label>
                <input 
                    onChange={handleChanges}
                    type='text'
                    value={business.description}
                    placeholder="Description"
                    name="description"
                    required>
                </input>
            <button>Add Business</button>
            </form>
        </div>
    )
 }

 export default AddBusiness;