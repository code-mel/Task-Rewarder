import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
//Bootstrap style 
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../src/style.css'
import { Container, Row, Col, Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      items: [],
      dropdownOpen: false
    }
    this.toggle = this.toggle.bind(this);
  }

  componentDidMount() {
    $.ajax({
      url: '/items', 
      success: (data) => {
        this.setState({
          items: data
        })
      },
      error: (err) => {
        console.log('err', err);
      }
    });
  }
  toggle() {
    this.setState(prevState => ({
      dropdownOpen: !prevState.dropdownOpen
    }));
  }

  render () {
    return (
      <div className="main-container">
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
            <Col md="7">.col-md-7</Col>
            <Col md="5">.col-md-5</Col>
          </Row> 
      </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));