import React, {useState, useEffect} from "react";

import BusinessForm from './BusinessForm';
import BusinessList from './BusinessList';

import {fetchBusiness} from '../actions/marketActions';
import {connect} from 'react-redux';

function BusinessDashboard(props) {

    
    const [dependency, setDependency] = useState(false)

    useEffect(() => {
       props.fetchBusiness()
    }, [dependency])

    return(
        <div className="dash">
            <BusinessForm  setDependency={setDependency} />
            <BusinessList  />
        </div>
    )
}

export default connect(null, {fetchBusiness})(BusinessDashboard)