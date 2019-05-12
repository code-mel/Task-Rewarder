import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Taskform from './components/Taskform.jsx'
import Tasks from './components/Tasks.jsx'
import backgroundSvg from './images/background.svg'

// Redux - store/provider
import {Provider} from 'react-redux'
import store from '../store.jsx'

//Bootstrap style 
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../src/style.css'
import { Row, Col, Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      items: [],
      dropdownOpen: false
    }
    this.toggle = this.toggle.bind(this);
  }
  toggle() {
    this.setState(prevState => ({
      dropdownOpen: !prevState.dropdownOpen
    }));
  }

  render () {
    return (
      <Provider store={store}>
      <div className="main-container">
      <div className="background">
        <div className="background-img">
          <img src={backgroundSvg}/>
          <div className="color-block"></div>
        </div>
      </div>
          <Col md="3" className="side-nav">
          <div className="profile-container">
            <img src="https://via.placeholder.com/150" alt="Profile Pic"/>
            <h3>Melanie V.</h3>
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
            <p>Total tasks created : 5</p>
            <p>Number completed : 2</p>
            <hr/>
            <h4>Reward info:</h4>
            <p>Total Rewards created : 8</p>
            <p>Rewards Claimed : 2</p>
          </div>
          
        </Col>
          <Row className="col-md-9">   
            <Col md="7">
              <Taskform/>
            </Col>
            <Col md="5" className="last-col">
              <Tasks />
            </Col>
          </Row> 
      </div>
      </Provider>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));