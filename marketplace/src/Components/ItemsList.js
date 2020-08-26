import React, {useEffect} from 'react';
import ItemCard from './ItemCard';
import {connect} from 'react-redux';
import {fetchMarket} from '../actions/marketActions';

const ItemList = (props) => {
    useEffect(() => {
        props.fetchMarket()
    }, [])

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

export default connect(mapStateToProps, {fetchMarket})(ItemList)



  
// import React from 'react';

// import ItemCard from './ItemCard';

// export default function ItemList({items}) {

//     return (
//         <div className="card-container">
//             {items.map(item => (
//                 <ItemCard key={item.id} item={item} />
//             ))}
//         </div>
//     )
// }