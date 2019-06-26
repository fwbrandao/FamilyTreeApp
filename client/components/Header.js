import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import { Link } from 'react-router';

import mutation from '../mutations/Logout';
import query from '../queries/CurrentUser';

class Header extends Component {

    onLogoutClick() {
        this.props.mutate({
            refetchQueries: [{ query }]
        });
    }

    renderButton() {
        const { loading, user } = this.props.data;
        if (loading) { return <div />; }

        if (user) {
            return  <li>
                        <a onClick={this.onLogoutClick.bind(this)}>Logout</a>
                    </li>
        } else {
            return (
                <div>
                    <li>
                        <Link to="/signup">
                            Signup
                        </Link>
                    </li>
                    <li>
                        <Link to="/login">
                            Login
                        </Link>
                    </li>
                </div>
            )
        }
    }

    render() {
        return (
            <nav className="teal lighten-2">
                <div className="nav-wrapper">
                    <Link to="/" className="brand-logo left">
                        FamilyTree
                    </Link>
                    <ul className="right">
                        {this.renderButton()}
                    </ul>
                </div>
            </nav>
        );
    }
}

export default graphql(mutation)(
    graphql(query)(Header)
);