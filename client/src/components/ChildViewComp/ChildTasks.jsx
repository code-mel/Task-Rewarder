import React, { Component } from 'react'

//to connect to store
import { connect } from 'react-redux';
import { fetchChildTaks } from '../../../actions/childsAction.jsx'

import ChildSingleTask from './ChildSingleTask.jsx'

class ChildTasks extends Component {
  componentWillMount() {
    //console.log(this.props.parentId)
    this.props.fetchChildTaks(this.props.parentId);
  }
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
export default connect (mapStateToProps, {fetchChildTaks})(ChildTasks);