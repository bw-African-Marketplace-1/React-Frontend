import { FETCH_MARKET_DATA, FETCH_MARKET_FAIL, FETCH_MARKET_SUCCESS, 
    FETCH_BUSINESS_DATA, FETCH_BUSINESS_FAIL, FETCH_BUSINESS_SUCCESS} from '../actions/marketActions';

const initialState = {
    items: [],
    businesses:[],
    isFetching: false,
    errors: ''
}

const marketReducer = (state = initialState, actions) => {
    switch(actions.type){
        case FETCH_MARKET_DATA:
            return {
                ...state,
                isFetching: true,
            }
        case FETCH_MARKET_SUCCESS:
            return {
                ...state,
                isFetching: false,
                items: actions.payload
            }
        case FETCH_MARKET_FAIL:
            return {
                ...state,
                isFetching: false,
                error: actions.payload
            }
        case FETCH_BUSINESS_DATA:
            return {
                        ...state,
                        isFetching: true,
                    }
        case FETCH_BUSINESS_SUCCESS:
            return {
                        ...state,
                        isFetching: false,
                        businesses: actions.payload
                    }
        case FETCH_BUSINESS_FAIL:
            return {
                        ...state,
                        isFetching: false,
                        error: actions.payload
                    }
        default:
            return state;
    }
}

export default marketReducer;