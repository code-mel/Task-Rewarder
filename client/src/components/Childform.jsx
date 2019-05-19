import React, { Component } from 'react'
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

//to connect to store
import { connect } from 'react-redux';
import { newKid } from '../../actions/postAction.jsx'

let pathname = window.location.pathname.split('/');
let endPoint = pathname[pathname.length -2] === '/' ? 1 : pathname[pathname.length -2];
class ChildFrom extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name :'',
      userName : '',
      password: '',
      parent_id : endPoint

    }
    this.stateHandler = this.stateHandler.bind(this);
    this.submitHandler = this.submitHandler.bind(this);
  }
  stateHandler(e){
    this.setState({[e.target.name] : e.target.value});
  }
  submitHandler(e) {
    e.preventDefault();
    const kid = {
      name :this.state.name,
      userName : this.state.userName,
      password: this.state.password,
      parent_id : endPoint
    }
    // Call Action and past post through
   // this.props.newKid(kid);

    // Reset state
    this.setState({
        name :'',
        userName : '',
        password: '',
        parent_id : endPoint
    })
  }

  render() {
    return (
      <form onSubmit={this.submitHandler} className="child-form">
        <FormGroup>
            <Label>Name</Label>
            <Input type="text" name="name" value={this.state.name} onChange={this.stateHandler} placeholder="ex. Billy.." required/>
            <br/>
            <Label>UserName/Password</Label>
            <Input type="text" name="userName" value={this.state.userName} onChange={this.stateHandler} placeholder="UserName" required/>
            <Input type="password" name="password" value={this.state.password} onChange={this.stateHandler} placeholder="Password" required/>

        </FormGroup>
        <Button>Add</Button>
      </form>  
    )
  }
}
export default connect (null, {newKid})(ChildFrom);