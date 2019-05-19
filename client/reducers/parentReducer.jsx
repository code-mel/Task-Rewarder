import { NEW_KID } from '../actions/types.jsx';

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
        default:
            return state;
    }
}