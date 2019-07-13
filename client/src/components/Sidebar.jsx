import React, { Component } from 'react'

//to connect to store
import { connect } from 'react-redux';
import { fetchParentInfo, fetchChildren } from '../../actions/parentsAction.jsx'

import {Col, Dropdown, DropdownToggle, DropdownMenu, DropdownItem} from 'reactstrap'

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
      //gets parent info
      this.props.fetchParentInfo(this.props.pramsId);
      // gets children based on parent id
      this.props.fetchChildren(this.props.pramsId);
    }
    componentDidUpdate(prevProps) {
      // this will compare and help determine if there were any change in the state in our store
      if (this.props.child !== prevProps.child) {
        let updateState = this.props.children.unshift(this.props.child);
        this.setState({children : updateState})
      }
    }
  render() {
      const {id, name, userName} = this.props.parentInfo;
      const children = this.props.children.map(child => (
        <DropdownItem key={child.id} href={'/child/' + child.id} target="_blank">{child.name}</DropdownItem>
      ));
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
            {children}
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
    { parentInfo: state.parent.parent,
      children : state.parent.children,
      child : state.parent.child,
      posts: state.post.tasks
    }
    )
export default connect (mapStateToProps, {fetchParentInfo,fetchChildren})(Sidebar);