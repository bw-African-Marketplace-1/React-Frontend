import React from 'react';
import BusinessCard from './BusinessCard';
import {connect} from 'react-redux';


const BusinessList = (props) => {
   

    return (
        <div className="card-container">
            {props.businesses.map(business => (
                <BusinessCard key={business.id} business={business} />
            ))}
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

export default connect(mapStateToProps, {})(BusinessList)