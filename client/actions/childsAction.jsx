import { FETCH_CHILD_INFO, FETCH_CHILD_TASKS } from './types.jsx';
import axios from 'axios';

export const fetchChildInfo = (childId) => dispatch => {
  //console.log('I am fetching',parentId)
    axios.get(`/child/${childId}/info`)
      .then(record => {
        console.log(record)
        dispatch({
          type: FETCH_CHILD_INFO,
          payload: record.data[0] //SHOULD BE PASSING AN OBJECT
        })
      }
      )
      
  };
export const fetchChildTaks = (parentId) => dispatch => {
  //console.log('I am fetching',parentId)
    axios.get(`/child/${parentId}/tasks`)
      .then(record => {
        //console.log(record)
        dispatch({
          type: FETCH_CHILD_TASKS,
          payload: record.data
        })
      }
      )
      
  };