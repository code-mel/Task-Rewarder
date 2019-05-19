import { NEW_KID } from './types.jsx';
import axios from 'axios';

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