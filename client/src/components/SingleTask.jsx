import React, { Component } from 'react'
import {Button, CardBody, Card,Label,Input} from 'reactstrap'

//to connect to store
import { connect } from 'react-redux';
import {deletePost,updatePost} from '../../actions/postAction.jsx'

class SingleTask extends Component {
  constructor(props) {
    super(props)
    this.state = {
      title: '',
      value: this.props.post.value,
      id: this.props.post.id,
      aproved: this.props.post.aproved,
      updateToggle: false
    }
    this.stateHandler = this.stateHandler.bind(this);
    this.submitHandler = this.submitHandler.bind(this);
  }
  
  
  stateHandler(e){
    e.preventDefault();
    if(e.target.name === 'updateToggle' || e.target.name === 'canleUpdate'){
      this.setState({ updateToggle : !this.state.updateToggle});
    }else {
      this.setState({[e.target.name] : e.target.value});
    }
  }
  deleteTask(id) {
    this.props.deletePost(id);
  }
  submitHandler(e) {
    e.preventDefault();
    const task = {
      title : this.state.title,
      value : this.state.value,
      aproved : this.state.aproved,
      status : this.props.post.status,
      parent_id : this.props.post.parent_id,
      child_id : 'NULL', 
      id: this.state.id
    }
    // Call Action and past post through
    this.props.updatePost(task);

    // Reset state
    this.setState({
      title :'',
      value : this.state.value,
      updateToggle: false
    })
  
  }
  statusUpdate(id, stats) {
    ///Status update function ....
  }
  render() {
    const {id, title, value, aproved,status, parent_id} = this.props.post;
    let currentCard;

    let updateFrom = (<CardBody>
        <form onSubmit={this.submitHandler} className='update-form'>
            <Input type="text" name="title" value={this.state.title} onChange={this.stateHandler} placeholder={title+"..."} required/>
            <Input type="number" name="value" min="10" max="1000" value={this.state.value} onChange={this.stateHandler} className="number-value"/>
            <br/>
          <Button name="canleUpdate" onClick={this.stateHandler}>Cancle</Button> <Button >update</Button>
        </form>
      </CardBody>);

/// ~~~~~ Boolean statments that help determine the current card that should be displayed based  on status/aproved values ~~~~~~~ ///

    if(status === 1 || status === 0) { // if status is 0 or 1 then card with delete and update button will be visibale 
      currentCard = (<CardBody>
        <p>Status: {status ? 'In the works' : 'Open'}</p> 
        <ul className="card-details">
          <li><strong>{title}</strong></li>
          <li> Pts. {value}</li>
      </ul>
      <Button onClick={()=> this.deleteTask(id)}>Delete</Button> <Button name="updateToggle" onClick={this.stateHandler}>update</Button>
      </CardBody>);
    }else if(status === 2 && !aproved){ // if status is 2 the card with dissaprove or approve button will display
      currentCard = (<CardBody>
        <p>Status: Needs Approval</p>
        <ul className="card-details">
          <li><strong>{title}</strong></li>
          <li> Pts. {value}</li>
      </ul>
      <Button onClick={()=> this.statusUpdate(id, 0)}>Disapprove</Button> <Button name="approveTask" onClick={()=> this.statusUpdate(id, 1)}>Approve</Button>
      </CardBody>);
    }else if(status === 2 && aproved){ // if status is 2 and 1 then card with just Delete button will show
      currentCard = (<CardBody>
        <p>Status: Done</p>
        <ul className="card-details">
          <li><strong>{title}</strong></li>
          <li> Pts. {value}</li>
      </ul>
      <Button onClick={()=> this.deleteTask(id)}>Delete</Button>
      </CardBody>);
    }
/// ~~~~ End of statments ~~~ ///

    return (
    <Card key={id}>
        {this.state.updateToggle ? updateFrom : currentCard}
    </Card>
    )
  }
}

export default connect (null, {deletePost,updatePost})(SingleTask);