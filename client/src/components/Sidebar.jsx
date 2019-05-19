import React, { Component } from 'react'

//to connect to store
import { connect } from 'react-redux';
import { fetchParentInfo } from '../../actions/postAction.jsx'

import {Col, Dropdown, DropdownToggle, DropdownMenu, DropdownItem} from 'reactstrap'

let pathname = window.location.pathname.split('/');
let endPoint = pathname[pathname.length -2] === '/' ? 1 : pathname[pathname.length -2];

class Sidebar extends Component {
    constructor(props) {
      super(props);
      this.state = { 
        dropdownOpen: false
      }
      this.toggle = this.toggle.bind(this);
    }
    toggle() {
      this.setState(prevState => ({
        dropdownOpen: !prevState.dropdownOpen
      }));
    }
    componentWillMount() {
      this.props.fetchParentInfo(endPoint);
      this.props.fetchParentInfo(endPoint);
    }
  render() {
      const {id, name, userName} = this.props.parentInfo
    return (
    <Col md="3" className="side-nav">
        <div className="profile-container">
          <img src="https://via.placeholder.com/150" alt="Profile Pic"/>
          <h3>{name}</h3>
        </div>

        <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
          <DropdownToggle caret>
            Children
          </DropdownToggle>
          <DropdownMenu>
            <DropdownItem >Kid one</DropdownItem>
            <DropdownItem>Kid Two</DropdownItem>
            <DropdownItem>Kid Three</DropdownItem>
          </DropdownMenu>
        </Dropdown>
        
        <div className="info-container">
          <h4>Tasks info:</h4>
          <p>Total tasks created : {this.props.posts.length}</p>
          <p>Needs Approval : ~</p>
          <hr/>
          <h4>Reward info:</h4>
          <p>Total Rewards created : 8</p>
          <p>Rewards Claimed : 2</p>
        </div>
        
    </Col>
    )
  }
}
const mapStateToProps = state => (
    { parentInfo: state.post.parent,
      posts: state.post.tasks
    }
    )
export default connect (mapStateToProps, {fetchParentInfo})(Sidebar);