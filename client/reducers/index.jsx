// will have a list of all our reducers
import { combineReducers } from 'redux'

import postReducer from './postReducer.jsx'
import parentReducer from './postReducer.jsx'

export default combineReducers({
    post : postReducer,
    parent : parentReducer
})