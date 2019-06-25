import React from 'react';
import Header from './Header';
import Home from './Home';

const App = (props) => {

    return (
        <did className="container">
            <Header />
            <Home />
            {props.children}
        </did>
    );
}

export default App;