import React, {useState} from 'react';
import {axiosAuth} from '../utils/axiosAuth';
import {connect} from 'react-redux';
import {fetchMarket} from '../actions/marketActions';
 
const initialItem = {
    name: '',
    price: '',
    category: '',
    location: '',
    description: '',
    business_id: ''
}

function ItemForm({items, setDependency, fetchMarket}) {
    
    const [updating, setUpdating] = useState(false);
    const[itemToUpdate, setItemToUpdate] = useState(initialItem);

    const editItem = item => {
        setUpdating(true);
        setItemToUpdate(item);
    }

    const saveUpdate = e => {
        e.preventDefault();
        axiosAuth()
        .put(`forsale/${itemToUpdate.id}`, itemToUpdate)
        .then(res => {
            console.log(res.data)
            setDependency(true)
        })
        .catch(err => console.log(err))
    }

    const deleteItem = item => {
        
        axiosAuth()
        .delete(`forsale/${itemToUpdate.id}`, item)
        .then(res => {
            console.log(res.data)
            fetchMarket()
        })
    }
            
    return (
        <div className="items-list">
            <ul className="organized">
                {items.map(item => (
                    <li key={item.name} onClick={() => editItem(item)} className="edit-items">
                        <span>
                            <span onClick={e => {
                                e.stopPropagation();
                                deleteItem(item)
                            }}>
                                X
                            </span>{" "}
                            {item.name}
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
                        Price:
                        <input
                        onChange={e =>
                        setItemToUpdate({ ...itemToUpdate, price: e.target.value})}
                        value={itemToUpdate.price}
                        />
                    </label>

                    <label>
                        Category:
                        <input
                        onChange={e =>
                        setItemToUpdate({ ...itemToUpdate, category: e.target.value})}
                        value={itemToUpdate.category}
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

                    <label>
                        Business ID:
                        <input
                        onChange={e =>
                        setItemToUpdate({ ...itemToUpdate, business_id: e.target.value})}
                        value={itemToUpdate.business_id}
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
        items: state.items,
        isFetching: state.isFetching,
        error: state.error
    }
}

export default connect(mapStateToProps, {fetchMarket})(ItemForm)