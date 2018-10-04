//////////////
// Imports //
////////////

import React, {Component} from 'react';
import PropTypes from 'prop-types';

// Components
import Spinner from '../common/Spinner';
import ProfileItem from './ProfileItem';

// redux
import { connect } from 'react-redux';

// Actions
import { getProfiles } from '../../redux/actions/profileActions';

////////////////
// Component //
//////////////

class Profiles extends Component {

    // Lifecycle method for when the component "mounts" which will get the profiles
    componentDidMount() {
        this.props.getProfiles();
    }

    // The rendering of the page and functionality
    render() {

        const{ profiles, loading } = this.props.profile;

        // Profile content
        let profileItems;

        // Check if profile is null or loading, if so show a spinner gif
        if (profiles === null || loading) {
            profileItems = <Spinner />;
        } else {
            // Check to see if there are profiles
            if(profiles.length > 0) {
                // Profiles are available so loop through the profiles and
                // add a profileItem component for each profile passing the profile as property
                profileItems = profiles.map((profile) => (
                    <ProfileItem key={profile._id} profile={profile}/>
                ))
            } else {
                // There are no profiles to display
                profileItems = <h4>No profiles found ...</h4>
            }
        }

        return (
            <div className="profiles">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <h1 className="display-4 text-center">Developer profiles</h1>
                            <p className="lead text-center">
                                Browse through the staff members
                            </p>
                            { profileItems }
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}

// Prop types for the component
Profiles.propTypes = {
    getProfiles: PropTypes.func.isRequired,
    profile: PropTypes.object.isRequired
};

// Map the state as a component prop
const mapStateToProps = (state) => ({
    profile: state.profile
});

//////////////
// Exports //
////////////

export default connect(mapStateToProps, { getProfiles })(Profiles);