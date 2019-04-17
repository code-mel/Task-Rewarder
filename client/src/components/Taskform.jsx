import React, { Component } from 'react'
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

class Taskform extends Component {
  render() {
    return (
      
      <form className="task-form">
        <FormGroup>
            <Label>Task</Label>
            <Input type="text" name="taskName" placeholder="ex. Do the Dishes..." />
            <br/>
            <Label>Task Value</Label>
            <Input type="number" name="taskValue" min="10" max="1000" className="number-value"/>
        </FormGroup>
        <Button>Create</Button>
      </form>
        
    )
  }
}
export default Taskform