import React from 'react';
import ReactDOM from 'react-dom';
import { Router, hashHistory, Route, IndexRoute } from 'react-router';

import ApolloClient, { createNetworkInterface } from 'apollo-client';
import { ApolloProvider } from 'react-apollo';

import App from './components/App';
import Dashboard from './components/View/Dashboard';
import LoginForm from './components/LoginForm';
import SignupForm from './components/SignupForm';
import requireAuth from './components/requireAuth';

const networkInterface = new createNetworkInterface({
    uri: '/graphql',
    opts: {
        credentials: 'same-origin'
    }
});

// Apollo  call to the server
// allows apollo to track and fetch all objects with an id.
const client = new ApolloClient({
    networkInterface,
    dataIdFromObject : o => o.id
});

const Root = () => {
  return (
        <ApolloProvider client={client}>
            <Router history={hashHistory}>
                <Route path="/" component={App}>
                    <Route path="dashboard" component={requireAuth(Dashboard)} />
                    <Route path="login" component={LoginForm} />
                    <Route path="signup" component={SignupForm} />
                </Route>
            </Router>
        </ApolloProvider>
    );
};

ReactDOM.render(<Root />, document.querySelector('#root'));
