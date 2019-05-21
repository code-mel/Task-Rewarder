import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Root from './components/Root.jsx'

import store from '../store.jsx'
//Bootstrap style 
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../src/style.css'

ReactDOM.render(<Root store={store} />, document.getElementById('app'));