import React, { Component } from 'react';
import TreeView from './TreeView';

class Dashboard extends Component {
    // state = {  }
    render() {
        return (
            <div className="container center">
                <h2>Family Tree App</h2>
                <TreeView />
            </div>
        );
    }
}

export default Dashboard;