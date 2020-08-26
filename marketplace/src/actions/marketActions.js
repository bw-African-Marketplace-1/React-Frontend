import axios from 'axios';

export const FETCH_MARKET_DATA = 'FETCH_MARKET_DATA'
export const FETCH_MARKET_SUCCESS = 'FETCH_MARKET_SUCCESS'
export const FETCH_MARKET_FAIL = 'FETCH_MARKET_FAIL'

export const fetchMarket = () => (dispatch) => {
    dispatch({type:FETCH_MARKET_DATA})
    axios.get('forsale')
    .then(res => {
        console.log('get request', res.data);
        dispatch({type: FETCH_MARKET_SUCCESS, payload: res.data})
    })
    .catch(err => {
        console.log('error', err);
        dispatch({type: FETCH_MARKET_FAIL, payload: err})
    })
}

