import { FETCH_CHILD_TASKS } from './types.jsx';
import axios from 'axios';

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