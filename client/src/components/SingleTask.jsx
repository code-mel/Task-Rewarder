import React, { Component } from 'react'
import {Button, CardBody, Card} from 'reactstrap'

//to connect to store
import { connect } from 'react-redux';
import {deletePost} from '../../actions/postAction.jsx'

class SingleTask extends Component {
  
  deleteTask(id) {
    this.props.deletePost(id);
  }
  render() {
    const {id, title, value, aproved, parent_id} = this.props.post;
    return (
    <Card key={id}>
        <CardBody>
        <ul className="card-details">
            <li><strong>{title}</strong></li>
            <li> Pts. {value}</li>
            </ul>
            <Button onClick={()=> this.deleteTask(id)}>Delete</Button> <Button>update</Button>
        </CardBody>
    </Card>
    )
  }
}

export default connect (null, {deletePost})(SingleTask);