//////////////
// Imports //
////////////

import React, {Component} from 'react';
import PropTypes from 'prop-types';

// Components
import Spinner from '../common/Spinner';

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
        let profileItems;

        if (profiles === null || loading) {
            profileItems = <Spinner />;
        } else {
            if(profiles.length > 0) {
                profileItems = <h1>Profiles here</h1>
            } else {
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