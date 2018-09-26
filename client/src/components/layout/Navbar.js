//////////////
// Imports //
////////////

import React, {Component} from 'react';
import { Link } from 'react-router-dom';

import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { logOutUserAction } from "../../redux/actions/authActions";
import { clearCurrentProfile } from "../../redux/actions/profileActions";

////////////////
// Component //
//////////////

class NavBar extends Component {

    onLogoutClick = (e) => {
        e.preventDefault();
        this.props.logOutUserAction();
        this.props.clearCurrentProfile();
    };

    render() {
        const { isAuthenticated, user } = this.props.auth;

        const authLinks = (
            <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                    <a className="nav-link" href="feed.html">
                        Post Feed
                    </a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="dashboard.html">
                        Dashboard
                    </a>
                </li>
                <li className="nav-item">

                    <a
                        href=""
                        onClick={this.onLogoutClick}
                        className="nav-link">
                        <img className="rounded-circle" src={ user.avatar } alt={ user.name } style={{ width: '25px', marginRight: '5px'}} title="You must have a Gravatar connected to your email to display an image" />
                        {' '}Logout
                    </a>
                </li>
            </ul>
        );

        const guestLinks = (
            <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                    <Link className="nav-link" to="/register">Sign Up</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/login">Login</Link>
                </li>
            </ul>
        );

        return (
            <nav className="navbar navbar-expand-sm navbar-dark bg-dark mb-4">
                <div className="container">
                    <Link className="navbar-brand" to="/">DevConnector</Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#mobile-nav">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="mobile-nav">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item">
                                <Link className="nav-link" to="/profiles">Developers</Link>
                            </li>
                        </ul>

                        { isAuthenticated ? authLinks : guestLinks }

                    </div>
                </div>
            </nav>
        );
    }
}

//////////////
// Exports //
////////////

// Set the prop types for this component
NavBar.propTypes = {
    logOutUserAction: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired
};

// add the state(s) as a prop
const mapStateToProps = (state) => ({
    // Everything after the ':'
    // comes from the reducers listed in the combineReducers method
    // in the file ./client/src/redux/reducers/index.js
    auth: state.auth
});

export default connect(mapStateToProps,{ logOutUserAction, clearCurrentProfile })(NavBar);
