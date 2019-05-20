import { FETCH_POSTS, NEW_POST, DELETE_POST,UPDATE_POST } from './types.jsx';
import axios from 'axios';

export const fetchPost = (parentId) => dispatch => {
  //console.log('I am fetching',parentId)
    axios.get(`/parentinfo/${parentId}/tasks`)
      .then(posts =>
        dispatch({
          type: FETCH_POSTS,
          payload: posts.data
        })
      );
  };
  export const newPost = (postData) => dispatch => {
    axios.post('/task', postData)
    .then( (addedPost) => { 
      // adding unique id to task
      let taskData = postData;
      taskData['id'] = Number(addedPost.data);
      taskData['child_id'] = undefined;
      dispatch({
        type: NEW_POST,
        payload: taskData
      })
    })
    .catch( (error) => { // this will throw an errors for any caught erros 
      console.log(error);
    });
  };
  export const deletePost = (id) => dispatch => {
    axios.delete(`/task/${id}`)
    .then( () => { 
      console.log('Task deleted :',id);
      dispatch({
        type: DELETE_POST,
        payload: id
      })
    })
    .catch( (error) => { // this will throw an errors for any caught erros 
      console.log(error);
    });
  };
  export const updatePost = (updatedPost) => dispatch => {
    //console.log('im being triggered updated Fnc')
    let id = updatedPost.id;
    axios.put(`/task/${id}`, updatedPost)
    .then( () => { 
      console.log('Post updated :',updatedPost);
      dispatch({
        type: UPDATE_POST,
        payload: updatedPost
      })
    })
    .catch( (error) => { // this will throw an errors for any caught erros 
      console.log(error);
    });
  };
