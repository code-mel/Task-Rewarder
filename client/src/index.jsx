import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Sidebar from './components/Sidebar.jsx'
import Taskform from './components/Taskform.jsx'
import Tasks from './components/Tasks.jsx'
import backgroundSvg from './images/background.svg'

// Redux - store/provider
import {Provider} from 'react-redux'
import store from '../store.jsx'

//Bootstrap style 
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../src/style.css'
import { Row, Col} from 'reactstrap';

class App extends React.Component {
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
          <Sidebar />
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