//////////////
// Imports //
////////////

import React, {Component} from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Spinner from '../common/Spinner';

// Components
import ProfileAbout from './ProfileAbout';
import ProfileCreds from './ProfileCreds';
import ProfileGithub from './ProfileGithub';
import ProfileHeader from './ProfileHeader';

// Actions
import { getProfileByHandle } from '../../redux/actions/profileActions';

////////////////
// Component //
//////////////

class Profile extends Component {

    // Lifecycle method that runs when the component is about to render
    // it gets the profile by its handle by reading the params of the router
    // https://jaketrent.com/post/access-route-params-react-router-v4/
    componentDidMount() {
        if (this.props.match.params.handle) {
            this.props.getProfileByHandle(this.props.match.params.handle)
        }
    }

    componentWillReceiveProps(nextProps) {
        if(nextProps.profile.profile === null && this.props.profile.loading) {
            this.props.history.push('/not-found');
        }
    }

    render() {

        const { profile, loading } = this.props.profile;

        // Profile content
        let profileContent;

        // Check if profile is null or loading, if so show a spinner gif
        if(profile === null || loading) {
            profileContent = <Spinner />
        } else {
            // Profiles is available so
            // Fill the profileContent with a Header, Credentials, Github & About
            profileContent = (
                <div>
                    <ProfileHeader profile={ profile }/>
                    <ProfileAbout profile={ profile }/>
                    <ProfileCreds education={ profile.education } experience={ profile.experience }/>

                    {profile.githubUsername
                        ? (<ProfileGithub username={profile.githubUsername} />)
                        : null
                    }
                </div>
            )
        }

        return (
            <div className="profile">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="row">
                                <div className="col-md-6">

                                    {/* Link to go back to profiles */}
                                    <Link to="/profiles" className="btn btn-light mb-3 float-left">
                                        Back to profiles
                                    </Link>
                                </div>
                            </div>

                            {/* The actual profile content */}
                            { profileContent }
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

// Component proptypes
Profile.propTypes = {
    getProfileByHandle: PropTypes.func.isRequired,
    profile: PropTypes.object.isRequired
};

// Map the state as a component prop
const mapStateToProps = (state) => ({
    profile: state.profile
});

//////////////
// Exports //
////////////

export default connect(mapStateToProps, { getProfileByHandle })(Profile);