import React, { Component } from 'react'
import {Button, CardBody, Card} from 'reactstrap'

class SingleTask extends Component {
  render() {
    const {id, title, value, aproved, parent_id} = this.props.post;
    return (
    <Card key={id}>
        <CardBody>
        <ul className="card-details">
            <li><strong>{title}</strong></li>
            <li> Pts. {value}</li>
            </ul>
            <Button>Delete</Button> <Button>update</Button>
        </CardBody>
    </Card>
    )
  }
}
export default SingleTask;