import { FETCH_CHILD_INFO, FETCH_CHILD_TASKS,FETCH_CHILD_TASKS_HISTORY } from '../actions/types.jsx';

const initialState = {
    tasks : [],
    history :[],
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
            tasks : action.payload,
            history : action.payload.filter(task => task.aproved)
        }
        default:
            return state;
    }
}