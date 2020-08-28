import React, {useState} from 'react';
import {axiosAuth} from '../utils/axiosAuth';
import {connect} from 'react-redux';
import {fetchBusiness} from '../actions/marketActions';
 
const initialItem = {
    name: '',
    user_id: '',
    location: '',
    description: '',
}

function BusinessForm({businesses, setDependency, fetchBusiness}) {
    
    const [updating, setUpdating] = useState(false);
    const[itemToUpdate, setItemToUpdate] = useState(initialItem);

    const editItem = item => {
        setUpdating(true);
        setItemToUpdate(item);
    }

    const saveUpdate = e => {
        e.preventDefault();
        axiosAuth()
        .put(`business/${itemToUpdate.id}`, itemToUpdate)
        .then(res => {
            console.log(res.data)
            fetchBusiness()
            setDependency(true)
        })
        .catch(err => console.log(err))
    }

    const deleteItem = item => {
        
        axiosAuth()
        .delete(`business/${itemToUpdate.id}`, item)
        .then(res => {
            console.log(res.data)
            fetchBusiness()
        })
    }
            
    return (
        <div className="items-list">
            <ul className="organized">
                {businesses.map(item => (
                    <li key={item.name} onClick={() => editItem(item)} className="edit-items">
                        <span className='update'>
                            <span className='delete' onClick={e => {
                                e.stopPropagation();
                                deleteItem(item)
                            }}>
                                Delete
                            </span>{" "}
                            Update: {item.name}
                        </span>
                    </li>
                ))}
            </ul>
            {updating && (
                <form onSubmit={saveUpdate}>
                    <legend>Update Item</legend>
                    <label>
                        Name:
                        <input
                        onChange={e =>
                        setItemToUpdate({ ...itemToUpdate, name: e.target.value})}
                        value={itemToUpdate.name}
                        />
                    </label>

                    <label>
                        User ID:
                        <input
                        onChange={e =>
                        setItemToUpdate({ ...itemToUpdate, price: e.target.value})}
                        value={itemToUpdate.user_id}
                        />
                    </label>

                    <label>
                        Location:
                        <input
                        onChange={e =>
                        setItemToUpdate({ ...itemToUpdate, location: e.target.value})}
                        value={itemToUpdate.location}
                        />
                    </label>

                    <label>
                        Description:
                        <input
                        onChange={e =>
                        setItemToUpdate({ ...itemToUpdate, description: e.target.value})}
                        value={itemToUpdate.description}
                        />
                    </label>

                    <div>
                        <button type='submit'>Update</button>
                        <button onClick={() => setUpdating(false)}>Cancel</button>
                    </div>
                </form>
            )}
        </div>
    )

}

const mapStateToProps = (state) => {
    return {
        businesses: state.businesses,
        isFetching: state.isFetching,
        error: state.error
    }
}

export default connect(mapStateToProps, {fetchBusiness})(BusinessForm)