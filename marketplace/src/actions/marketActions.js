
// import axios from 'axios';
import {axiosAuth} from '../utils/axiosAuth';

export const FETCH_MARKET_DATA = 'FETCH_MARKET_DATA'
export const FETCH_MARKET_SUCCESS = 'FETCH_MARKET_SUCCESS'
export const FETCH_MARKET_FAIL = 'FETCH_MARKET_FAIL'

export const fetchMarket = () => (dispatch) => {
    dispatch({type:FETCH_MARKET_DATA}) 
    axiosAuth().get('forsale')
    .then(res => {
        console.log('get request', res.data);
        dispatch({type: FETCH_MARKET_SUCCESS, payload: res.data})
    })
    .catch(err => {
        console.log('error', err);
        dispatch({type: FETCH_MARKET_FAIL, payload: err})
    })
}

export const FETCH_BUSINESS_DATA = 'FETCH_BUSINESS_DATA'
export const FETCH_BUSINESS_SUCCESS = 'FETCH_BUSINESS_SUCCESS'
export const FETCH_BUSINESS_FAIL = 'FETCH_BUSINESS_FAIL'

export const fetchBusiness = () => (dispatch) => {
    dispatch({type:FETCH_BUSINESS_DATA})
    
    axiosAuth().get('business')
    .then(res => {
        console.log('get request', res.data);
        dispatch({type: FETCH_BUSINESS_SUCCESS, payload: res.data})
    })
    .catch(err => {
        console.log('error', err);
        dispatch({type: FETCH_BUSINESS_FAIL, payload: err})
    })
}


