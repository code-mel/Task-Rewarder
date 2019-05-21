import React from 'react'

import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import ParentView from './ParentView.jsx'
import ChildView from './ChildView.jsx'

const Root = ({ store }) => (
  <Provider store={store}>
    <Router>
        <Route path="/parent/:parentId" component={ParentView} />
        <Route path="/child" component={ChildView} />
    </Router>
  </Provider>
)
export default Root