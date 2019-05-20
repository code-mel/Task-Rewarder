import { NEW_KID, FETCH_INFO } from '../actions/types.jsx';

const initialState = {
    children : [],
    child:{},
    parent : {}
}
export default (state = initialState, action) => {
    switch(action.type) {
        case NEW_KID :
        return {
            ...state,
            child : action.payload
        }
        case FETCH_INFO :
        return {
            ...state,
            parent : action.payload[0]
        }
        default:
            return state;
    }
}