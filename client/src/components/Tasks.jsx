import React, { Component } from 'react'
import { UncontrolledCollapse } from 'reactstrap'

//to connect to store
import { connect } from 'react-redux';
import { fetchPost } from '../../actions/postAction.jsx'

import SingleTask from './SingleTask.jsx'
let pathname = window.location.pathname.split('/');
let endPoint = pathname[pathname.length -2] === '/' ? 1 : pathname[pathname.length -2];
class Tasks extends Component {
  componentWillMount() {
    this.props.fetchPost(endPoint);
  }
  componentDidUpdate(prevProps) {
    // this will compare and help determine if there were any change in the state in our store
    if (this.props.newPost !== prevProps.newPost) {
      let updateState = this.props.posts.unshift(this.props.newPost);
      this.setState({posts : updateState})
    }
  }
  render() {
    const post = this.props.posts.map(post => (
        <SingleTask key={post.id} post={post}/>
      ));
    return (
      
        <div className="taskList main-card">
            <div className="task-title" id="toggler">
                <span>
                    <h3>{this.props.posts.length}</h3>
                    <p>List of Tasks</p>
                </span>
            </div>
        
            <UncontrolledCollapse toggler="#toggler">
                {post}
            </UncontrolledCollapse>
        </div>  
    )
  }
}
const mapStateToProps = state => (
    { posts: state.post.tasks,
      newPost : state.post.task
    })
  export default connect (mapStateToProps, {fetchPost})(Tasks);