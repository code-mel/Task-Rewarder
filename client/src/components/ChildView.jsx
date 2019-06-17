import React, { Component } from 'react'
import { Row, Col} from 'reactstrap'

import  ChildTasks  from "./ChildViewComp/ChildTasks.jsx";
import  ChildSidebar  from "./ChildViewComp/ChildSidebar.jsx";

import backgroundSvg from '../images/background.svg'

//to connect to store
import { connect } from 'react-redux';
import { fetchChildInfo } from '../../actions/childsAction.jsx'

class ChildView extends Component {
  componentWillMount() {
    this.props.fetchChildInfo(this.props.match.params.childId);
  }
  render() {
    const id = this.props.match.params.childId;
    return (
      <div className="main-container">
        <div className="background">
          <div className="background-img">
            <img src={backgroundSvg}/>
            <div className="color-block"></div>
          </div>
        </div>
            <ChildSidebar childInfo={this.props.childInfo} history={this.props.history}/>
            <Row className="col-md-9">   
              <Col md="7">
              <p> all the tasks of child list will go here</p>
                <ChildTasks parentId={id}/>
              </Col>
              <Col md="5" className="last-col">
                <p> all the rewards list will go here</p>
              </Col>
            </Row> 
        </div>
    )
  }
}
const mapStateToProps = state => (
  {childInfo : state.child.childInfo,
  history :state.child.history}
  )
export default connect (mapStateToProps, {fetchChildInfo})(ChildView);