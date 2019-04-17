import React, { Component } from 'react'
import {Button, CardBody, Card} from 'reactstrap'

class SingleTask extends Component {
  render() {
    return (
    <Card>
        <CardBody>
        <ul className="card-details">
            <li><strong>Mow the lawn and Wash Cars</strong></li>
            <li> Pts. 120</li>
            </ul>
            <Button>Delete</Button> <Button>update</Button>
        </CardBody>
    </Card>
    )
  }
}
export default SingleTask;