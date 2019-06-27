import React, { Component } from 'react'

//to connect to store
import { connect } from 'react-redux';


import ChildSingleTask from './ChildSingleTask.jsx'

class ChildTasks extends Component {
  render() {
    const taskslist = this.props.tasks.map(task => (
      <ChildSingleTask key={task.id} post={task} />
    ));
    return (
      <div className="taskList main-card">
        {taskslist}
      </div>
    )
  }
}
const mapStateToProps = state => (
  { tasks: state.child.tasks
  })
export default connect (mapStateToProps)(ChildTasks);