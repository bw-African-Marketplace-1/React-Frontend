import React, {useState, useEffect} from "react";

import ItemForm from './ItemForm';
import ItemList from './ItemsList';
// import {axiosAuth} from '../utils/axiosAuth';
import {fetchMarket} from '../actions/marketActions';
import {connect} from 'react-redux';

function ItemDashboard(props) {

    
    const [dependency, setDependency] = useState(false)

    useEffect(() => {
       props.fetchMarket()
    }, [dependency])

    return(
        <div className="dash">
            <ItemForm  setDependency={setDependency} />
            <ItemList  />
        </div>
    )
}

export default connect(null, {fetchMarket})(ItemDashboard)