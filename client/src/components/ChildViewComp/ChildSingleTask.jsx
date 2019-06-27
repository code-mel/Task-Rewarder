import React, { Component } from 'react'
import {Button, CardBody, Card,Label,Input} from 'reactstrap'

//to connect to store
import { connect } from 'react-redux';
import { updatePost } from '../../../actions/postAction.jsx'

class ChildSingleTask extends Component {
    constructor(props){
        super(props)
        this.state = {
            status : this.props.post.status
        }
        this.statusUpdate = this.statusUpdate.bind(this)
    }
    statusUpdate(e) {
        let updatedTask = this.props.post;
        
        if(!this.state.status){
            updatedTask.status = 1;
            updatedTask.child_id = this.props.childId;
            console.log(updatedTask)
            // Call Action and past post through
            this.props.updatePost(updatedTask);
            
            this.setState({ status :1});
        }else{
            updatedTask.status = 2
            // Call Action and past post through
            this.props.updatePost(updatedTask);
            this.setState({ status :2});
        }

    }
    render() {
        const {id, title, value, aproved, parent_id, child_id} = this.props.post;
        let currentStatus = 'avaliable';
        let button;
        if(!this.state.status) { // when status is 0
            button = <Button onClick={this.statusUpdate}>Do</Button>
        }else if(this.state.status === 1) { // 1 means that "do" button was clicked
            currentStatus = 'In Progress'
            button =<Button onClick={this.statusUpdate}>Done</Button>
        }else if(this.state.status === 2 && !aproved){ // 2 and aproved is false that means Done button clicked
            currentStatus = 'Pending Aproval'
            button ='' //clear button
        }else {
            currentStatus = 'Approved'
            button ='' //keep clear
        }
        
        return (
        <Card>
            <CardBody>
                <p>Status: {currentStatus}</p>
                <ul className="card-details">
                    <li><strong>{title}</strong></li>
                    <li> Pts. {value}</li>
                </ul>
              {button}
            </CardBody>
        </Card>
        )
    }
}
export default connect (null, {updatePost})(ChildSingleTask);