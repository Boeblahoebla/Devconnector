//////////////
// Imports //
////////////

import React, {Component} from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

// Components
import TextFieldGroup from '../common/TextFieldGroup';
import TextAreaFieldGroup from '../common/TextAreaFieldGroup';
import SelectListGroup from '../common/SelectListGroup';
import InputGroup from '../common/InputGroup';

////////////////
// Component //
//////////////

class CreateProfile extends Component {

    constructor(props) {
        super(props);

        this.state = {
            displaySocialInputs: false,
            handle:'',
            company:'',
            website:'',
            location:'',
            status:'',
            skills:'',
            githubUsername:'',
            bio:'',
            twitter:'',
            facebook:'',
            linkedIn:'',
            youtube:'',
            instagram:'',
            errors: {}
        }
    }

    render() {
        return (
            <div className="create-profile">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 m-auto">
                            <h1 className="display4 text-center">Create your Profile...</h1>
                                <p className="lead text-center">
                                    Let's get some information to make your profile stand out
                                </p>
                                <small className="d-block pb-3">* = required fields</small>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

// Prop types of the component
CreateProfile.propTypes = {
    profile: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired
};

// Default prop type when none given
const mapStateToProps = (state) => ({
    profile: state.profile,
    errors: state.errors
});

//////////////
// Exports //
////////////

export default connect(mapStateToProps)(CreateProfile);