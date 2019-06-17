import React, { Component } from 'react'

import {Col, Label} from 'reactstrap'

class ChildSidebar extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        let {name, wallet} = this.props.childInfo;
        return (
            <Col md="3" className="side-nav">
            {console.log('childSide Bar: ',this.props)}
                <div className="profile-container">
                <img src="https://via.placeholder.com/150" alt="Profile Pic"/>
                <h3>{name}</h3>
                </div>
                
                <div className="info-container">
                    <h4>Wallet Value: {wallet}</h4>
                    <hr/>
                    <h4>History</h4>
                    <ul>
                        {this.props.history.length > 0 ? this.props.history.map(record => <li key={record.id}>{record.title} - {record.value}</li>) : <li >No Tasks completed...</li>}
                    </ul>

                </div>
                
            </Col>
        )
    }
}
export default ChildSidebar;