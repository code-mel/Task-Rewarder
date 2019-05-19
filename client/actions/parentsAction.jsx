import { NEW_KID } from './types.jsx';
import axios from 'axios';

export const newChild = (childData) => dispatch => {
    axios.post('/child', childData)
    .then( (addedChild) => { 
      // adding unique id to child
      let childData = childData;
      childData['id'] = Number(addedChild.data); 
      childData['child_id'] = undefined;
      dispatch({
        type: NEW_POST,
        payload: taskData
      })
    })
    .catch( (error) => { // this will throw an errors for any caught erros 
      console.log(error);
    });
  };