import React, { Component } from 'react'
import { Row, Col} from 'reactstrap';

import Sidebar from './Sidebar.jsx'
import Taskform from './Taskform.jsx'
import Childform from './Childform.jsx'
import Tasks from './Tasks.jsx'
import backgroundSvg from '../images/background.svg'

class ParentView extends Component {
  render() {
    return (
        <div className="main-container">
        <div className="background">
          <div className="background-img">
            <img src={backgroundSvg}/>
            <div className="color-block"></div>
          </div>
        </div>
            <Sidebar />
            <Row className="col-md-9">   
              <Col md="7">
                <Taskform/>
                <Childform />
              </Col>
              <Col md="5" className="last-col">
                <Tasks />
              </Col>
            </Row> 
        </div>
    )
  }
}
export default ParentView;