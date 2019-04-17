import React, { Component } from 'react'
import { UncontrolledCollapse } from 'reactstrap'
import SingleTask from './SingleTask.jsx'

class Tasks extends Component {
  render() {
    return (
      
        <div className="taskList main-card">
            <div className="task-title" id="toggler">
                <span>
                    <h3>3</h3>
                    <p>List of Tasks</p>
                </span>
            </div>
        
            <UncontrolledCollapse toggler="#toggler">
                <SingleTask />
                <SingleTask />
                <SingleTask />
            </UncontrolledCollapse>
        </div>  
    )
  }
}
export default Tasks;