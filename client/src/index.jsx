import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import ParentView from './components/ParentView.jsx'

// Redux - store/provider
import {Provider} from 'react-redux'
import store from '../store.jsx'

//Bootstrap style 
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../src/style.css'

class App extends React.Component {
  render () {
    return (
      <Provider store={store}>
        <ParentView/>
      </Provider>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));