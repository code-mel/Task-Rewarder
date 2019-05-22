import { FETCH_CHILD_TASKS } from '../actions/types.jsx';

const initialState = {
    tasks : []
}
export default (state = initialState, action) => {
    switch(action.type) {
        case FETCH_CHILD_TASKS :
        return {
            ...state,
            tasks : action.payload
        }
        default:
            return state;
    }
}