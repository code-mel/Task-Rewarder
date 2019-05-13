import React, { Component } from 'react'
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

//to connect to store
import { connect } from 'react-redux';
import { newPost } from '../../actions/postAction.jsx'

let pathname = window.location.pathname.split('/');
let endPoint = pathname[pathname.length -2] === '/' ? 1 : pathname[pathname.length -2];
class Taskform extends Component {
  constructor(props) {
    super(props)
    this.state = {
      title :'',
      value : 0
    }
    this.stateHandler = this.stateHandler.bind(this);
    this.submitHandler = this.submitHandler.bind(this);
  }
  stateHandler(e){
    this.setState({[e.target.name] : e.target.value});
  }
  submitHandler(e) {
    e.preventDefault();
    const task = {
      title : this.state.title,
      value : this.state.value,
      aproved : false,
      parent_id : endPoint
    }
    // Call Action and past post through
    this.props.newPost(task);

    // Reset state
    this.setState({
      title :'',
      value : 0})
  
  }

  render() {
    return (
      
      <form onSubmit={this.submitHandler} className="task-form">
        <FormGroup>
            <Label>Task</Label>
            <Input type="text" name="title" value={this.state.title} onChange={this.stateHandler} placeholder="ex. Do the Dishes..." required/>
            <br/>
            <Label>Value</Label>
            <Input type="number" name="value" min="10" max="1000" value={this.state.value} onChange={this.stateHandler} className="number-value"/>
        </FormGroup>
        <Button>Create</Button>
      </form>
        
    )
  }
}
export default connect (null, {newPost})(Taskform);