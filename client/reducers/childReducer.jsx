import { FETCH_CHILD_INFO, FETCH_CHILD_TASKS } from '../actions/types.jsx';

const initialState = {
    tasks : [],
    childInfo : {}
}
export default (state = initialState, action) => {
    switch(action.type) {
        case FETCH_CHILD_INFO :
        return {
            ...state,
            childInfo : action.payload
        }
        case FETCH_CHILD_TASKS :
        return {
            ...state,
            tasks : action.payload
        }
        default:
            return state;
    }
}