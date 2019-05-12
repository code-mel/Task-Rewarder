import { FETCH_POSTS, NEW_POST, DELETE_POST, UPDATE_POST } from '../actions/types.jsx';

const initialState = {
    tasks : [],
    task : {}
}
export default (state = initialState, action) => {
    switch(action.type) {
        case FETCH_POSTS :
            return {
                ...state,
                tasks : action.payload
            }
        case NEW_POST :
        return {
            ...state,
            task : action.payload
        }
        case DELETE_POST :
        return {
            ...state,
            tasks : state.tasks.filter(task => task.id !== action.payload)
        }
        case UPDATE_POST :
        return {
            ...state,
            tasks : state.tasks.map((task) => {
                if(task.id === action.payload.id){
                    return task = action.payload
                    
                } else{
                    return task
                }
            })
        }
        default:
            return state;
    }
}