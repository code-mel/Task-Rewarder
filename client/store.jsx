import {createStore, applyMiddleware, compose} from 'redux'
import thunk from 'redux-thunk'
import rootReducer from './reducers/index.jsx'

const initionState = {};

const middleware = [thunk];

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; // This is to view any edits of the state with Redux on the redux extention on Chrom
const store = createStore(rootReducer,initionState, 
    composeEnhancers( applyMiddleware(...middleware))
    ) //first argument is represents reduces, second is the state, third is the middleWare that will help combine react to redux

export default store;