import { NEW_KID, FETCH_INFO } from './types.jsx';
import axios from 'axios';

export const fetchParentInfo = (parentId) => dispatch => {
  //console.log('I am fetching',parentId)
    axios.get(`/parentinfo/${parentId}`)
      .then(record => {
        //console.log(record)
        dispatch({
          type: FETCH_INFO,
          payload: record.data
        })
      }
      )
      
  };
export const newChild = (childData) => dispatch => {
    axios.post('/child', childData)
    .then( (addedChild) => { 
      // adding unique id to child
      let child = childData; // this will hold whole obj
      child['id'] = Number(addedChild.data) // adds id that was given to the add
      dispatch({
        type: NEW_KID,
        payload: child
      })
    })
    .catch( (error) => { // this will throw an errors for any caught erros 
      console.log(error);
    });
  };