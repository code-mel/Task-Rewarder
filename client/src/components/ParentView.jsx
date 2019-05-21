import React, { Component } from 'react'
import { Row, Col} from 'reactstrap';

import Sidebar from './Sidebar.jsx'
import Taskform from './Taskform.jsx'
import Childform from './Childform.jsx'
import Tasks from './Tasks.jsx'
import backgroundSvg from '../images/background.svg'

class ParentView extends Component {
  render() {
    //id => gets the id from params (Your Route => path="your path/:params") 
    // with id will be passedo each component that requires it.
    const id = this.props.match.params.parentId;
    return (
        <div className="main-container">
        <div className="background">
          <div className="background-img">
            <img src={backgroundSvg}/>
            <div className="color-block"></div>
          </div>
        </div>
            <Sidebar pramsId={id}/>
            <Row className="col-md-9">   
              <Col md="7">
                <Taskform pramsId={id}/>
                <Childform pramsId={id} />
              </Col>
              <Col md="5" className="last-col">
                <Tasks pramsId={id} />
              </Col>
            </Row> 
        </div>
    )
  }
}
export default ParentView;