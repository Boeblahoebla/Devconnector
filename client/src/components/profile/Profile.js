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

    render() {
        return (
            <div>
                <ProfileHeader/>
                <ProfileCreds/>
                <ProfileGithub/>
                <ProfileAbout/>
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