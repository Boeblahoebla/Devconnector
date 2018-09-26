//////////////
// Imports //
////////////

// React
import React from 'react';
import { Route, Redirect } from 'react-router-dom'
import PropTypes from 'prop-types'

// Redux
import { connect } from 'react-redux';

////////////////
// Component //
//////////////

// Check the following link for information about private routes
// https://tylermcginnis.com/react-router-protected-routes-authentication/
const PrivateRoute = ({ component: Component, auth, ...rest }) => (
    <Route
        {...rest}
        render = {props =>
            auth.isAuthenticated === true
                ? <Component {... props} />
                : <Redirect to="/login" />
        }
    />
);

/////////////////////
// Helper methods //
///////////////////

PrivateRoute.propTypes = {
    auth: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
    auth: state.auth
});

//////////////
// Exports //
////////////

export default connect(mapStateToProps)(PrivateRoute);