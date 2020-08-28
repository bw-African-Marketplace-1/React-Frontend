import React from 'react';
import ItemCard from './ItemCard';
import {connect} from 'react-redux';


const ItemList = (props) => {
   

    return (
        <div className="card-container">
            {props.items.map(item => (
                <ItemCard key={item.id} item={item} />
            ))}
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

export default connect(mapStateToProps, {})(ItemList)


