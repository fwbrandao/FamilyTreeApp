import React, { Component } from 'react';
// import CartIcon from './spacex.jpg';

class TreeView extends Component {
    // state = {  }
    render() {
        return (
            <div >
                <h4>Familia Brandao</h4>
                <div className="row">
                    <div className="col s12 m6">
                    <div className="card">
                        <div className="card-image">
                        {/* <img src={CartIcon} alt="image" width="100" height="50"/> */}
                        <span className="card-title">Card Title</span>
                        <a className="btn-floating halfway-fab waves-effect waves-light red"><i className="material-icons">add</i></a>
                        </div>
                        <div className="card-content">
                        <p>I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.</p>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
         );
    }
}

export default TreeView;