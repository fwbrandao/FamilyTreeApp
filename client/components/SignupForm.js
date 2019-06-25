import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import { hashHistory } from 'react-router';

import AuthForm from './AuthForm';
import mutation from '../mutations/Signup';
import query from '../queries/CurrentUser';

class SignupForm extends Component {
    constructor(props) {
        super(props);

        this.state = { errors: [] };
    }

    //WARNING! componentWillUpdate To be deprecated in React v17. Use componentDidUpdate instead.
    componentDidUpdate(prevProps) {
        // this.props // the old, current set of props
        // nextProps // the next set of props that will be in place
        // when the component rerenders
        if (!prevProps.data.user && this.props.data.user) {
            // redirect to dashboard!!
            hashHistory.push('/dashboard');
        }
    }


    onSubmit({ email, password }) {
        this.props.mutate({
            variables: { email, password },
            refetchQueries: [{ query }]
        }).catch(res => {
            const errors = res.graphQLErrors.map(error => error.message);
            this.setState({errors});
        });
    }

    render() {
        return (
            <div className="container">
            <div className="center-align">
                <h3>Sign Up</h3>
                <AuthForm
                errors={this.state.errors}
                onSubmit={this.onSubmit.bind(this)}/>
            </div>
            </div>
        );
    }
}

export default graphql(query)(
    graphql(mutation)(SignupForm)
);