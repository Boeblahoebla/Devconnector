//////////////
// Imports //
////////////

import React, {Component} from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getCurrentProfile } from "../../redux/actions/profileActions";
import Spinner from '../common/Spinner';
import { Link } from 'react-router-dom';

////////////////
// Component //
//////////////

class Dashboard extends Component {
    // Lifecycle method of React for when the component receives new props.
    // Gets the current profile when receiving new props
    componentDidMount() {
        this.props.getCurrentProfile();
    }

    render() {
        const { user } = this.props.auth;
        const { profile, loading } = this.props.profile;

        // Dashboard content
        let dashboardContent;

        // Check if profile is null or loading, if so show a spinner gif
        if (profile === null || loading) {
            dashboardContent = <Spinner />
        } else {
            // Check if logged in user has profile data
            if (Object.keys(profile).length > 0) {
                // object is filled with data
                dashboardContent = <h4>Display profile for {user.name}</h4>
            } else {
                // user is logged in but has no profile. Prompt the user to create one
                dashboardContent = (
                    <div>
                        <p className="lead text-muted">Welcome {user.name}</p>
                        <p>You have not yet setup a profile. Please create a profile using the button below</p>
                        <Link to="/create-profile" className="btn btn-lg btn-info">Create Profile</Link>
                    </div>
                )
            }
        }

        return (
            <div className="dashboard">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <h1 className="display-4">Dashboard</h1>
                            {dashboardContent}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

/////////////////////
// Helper methods //
///////////////////

// Set the prop types for this component
Dashboard.propTypes = {
    getCurrentProfile: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    profile: PropTypes.object.isRequired
};

// add the state as a prop
const mapStateToProps = state => ({
    profile: state.profile,
    auth: state.auth
});

//////////////
// Exports //
////////////

export default connect(mapStateToProps, { getCurrentProfile })(Dashboard);