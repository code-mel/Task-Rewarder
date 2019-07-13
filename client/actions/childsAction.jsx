import { FETCH_CHILD_INFO, FETCH_CHILD_TASKS, UPDATE_WALLET } from './types.jsx';
import axios from 'axios';

export const fetchChildInfo = (childId) => dispatch => {
  //console.log('I am fetching',parentId)
    axios.get(`/child/${childId}/info`)
      .then(record => {
        //console.log(record)
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
  export const updateChildWallet = (childId, taskValue) => dispatch => {
    const childWallet = {'id' : childId,'value': taskValue}
    axios.put(`/child/${childId}/wallet`, childWallet)
    .then( () => { 
      console.log('Wallet updated :',childWallet);
      dispatch({
        type: UPDATE_WALLET,
        payload: childWallet
      })
    })
    .catch( (error) => { // this will throw an errors for any caught erros 
      console.log(error);
    });
  }