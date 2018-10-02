//////////////
// Imports //
////////////

import React, {Component} from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link, withRouter } from 'react-router-dom';
import isEmpty from '../../validation/is-empty';

// Components
import TextFieldGroup from '../common/TextFieldGroup';
import TextAreaFieldGroup from '../common/TextAreaFieldGroup';
import SelectListGroup from '../common/SelectListGroup';
import InputGroup from '../common/InputGroup';

// Actions
import { createProfileAction, getCurrentProfile } from '../../redux/actions/profileActions';

////////////////
// Component //
//////////////

class CreateProfile extends Component {

    // Constructor for the class
    constructor(props) {
        super(props);

        this.state = {
            displaySocialInputs: false,
            handle: '', company: '', website: '', location: '',
            status: '', skills: '', githubUsername: '', bio: '',
            twitter: '', facebook: '', linkedIn: '', youtube: '',
            instagram: '', errors: {}
        }
    }

    // When the component mounts, get the current profile to fill in the fields
    componentDidMount() {
        this.props.getCurrentProfile();
    }

    // Lifecycle method of React for when the component receives new props,
    // Check to see if there are errors. If there are errors,
    // add the errors to the component state
    componentWillReceiveProps(nextProps) {
        if (nextProps.errors) {
            this.setState({ errors: nextProps.errors });
        }

        if (nextProps.profile.profile) {
            const profile = nextProps.profile.profile;

            // Skills back to Comma separated string
            const skillsCSV = profile.skills.join(',');

            // if profile field doesn't exist, make empty string
            profile.handle = !isEmpty(profile.handle) ? profile.handle : '';
            profile.company = !isEmpty(profile.company) ? profile.company : '';
            profile.website = !isEmpty(profile.website) ? profile.website : '';
            profile.location = !isEmpty(profile.location) ? profile.location : '';
            profile.bio = !isEmpty(profile.bio) ? profile.bio : '';
            profile.githubUsername = !isEmpty(profile.githubUsername) ? profile.githubUsername : '';
            profile.social = !isEmpty(profile.social) ? profile.social : {};

            profile.facebook = !isEmpty(profile.social.facebook) ? profile.social.facebook : {};
            profile.twitter = !isEmpty(profile.social.twitter) ? profile.social.twitter : '';
            profile.linkedIn = !isEmpty(profile.social.linkedIn) ? profile.social.linkedIn : '';
            profile.youtube = !isEmpty(profile.social.youtube) ? profile.social.youtube : '';
            profile.instagram = !isEmpty(profile.social.instagram) ? profile.social.instagram : '';


            // Set component fields state
            this.setState({
                handle: profile.handle,
                company: profile.company,
                website: profile.website,
                location: profile.location,
                status: profile.status,
                skills: skillsCSV,
                githubUsername: profile.githubUsername,
                bio: profile.bio,
                twitter: profile.social.twitter,
                facebook: profile.social.facebook,
                linkedIn: profile.social.linkedIn,
                youtube: profile.social.youtube,
                instagram: profile.social.instagram
            })

        }
    }

    // Rendering of page & functionality
    render() {

        // Pull the errors object from the state
        const { errors } = this.state;

        // Select options for status
        const options = [
            { label: '* Select professional status', value: 0},
            { label: 'Developer', value: 'Developer'},
            { label: 'Junior Developer', value: 'Junior Developer'},
            { label: 'Senior Developer', value: 'Senior Developer'},
            { label: 'Manager', value: 'Manager' },
            { label: 'Student or Learning', value: 'Student or Learning' },
            { label: 'Instructor or Teacher', value: 'Instructor or Teacher' },
            { label: 'Intern', value: 'Intern' },
            { label: 'Other', value: 'Other'}
        ];

        // Page content
        return (
            <div className="create-profile">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 m-auto">
                            <Link to='/dashboard' className='btn btn-light'>Go back</Link>

                            <h1 className="display4 text-center">Edit your Profile...</h1>

                            <small className="d-block pb-3">* = required fields</small>
                            <form onSubmit={this.onSubmit}>

                                {/* Profile handle text field */}
                                <TextFieldGroup
                                    placeholder="* Profile Handle"
                                    name="handle"
                                    value={ this.state.handle }
                                    onChange={ this.onChange }
                                    error={ errors.handle }
                                    info="A unique handle for your profile URL: your full name,
                                    company name, etc..."
                                />

                                {/* Status select field */}
                                <SelectListGroup
                                    placeholder="Status"
                                    name="status"
                                    value={ this.state.status }
                                    onChange={ this.onChange }
                                    options={ options }
                                    error={ errors.status }
                                    info="Give us an idea of where you are at in your career"
                                />

                                {/* Company text field */}
                                <TextFieldGroup
                                    placeholder="Company"
                                    name="company"
                                    value={ this.state.company }
                                    onChange={ this.onChange }
                                    error={ errors.company }
                                    info="Could be your own company or the one you currently work for"
                                />

                                {/* Website text field */}
                                <TextFieldGroup
                                    placeholder="Website"
                                    name="website"
                                    value={ this.state.website }
                                    onChange= {this.onChange }
                                    error={ errors.website }
                                    info="Could be your own website or the one of your company"
                                />

                                {/* Location text field */}
                                <TextFieldGroup
                                    placeholder="Location"
                                    name="location"
                                    value={ this.state.location }
                                    onChange={ this.onChange }
                                    error={ errors.location }
                                    info="Postcode & City suggested (eg. 9900 Eeklo)"
                                />

                                {/* Skills text field */}
                                <TextFieldGroup
                                    placeholder="* Skills"
                                    name="skills"
                                    value={ this.state.skills }
                                    onChange={ this.onChange }
                                    error={ errors.skills }
                                    info="Please use comma separated values (eg. HTML, CSS, Javascript, Python)"
                                />

                                {/* Github username text field */}
                                <TextFieldGroup
                                    placeholder="Github username"
                                    name="githubUsername"
                                    value={this.state.githubUsername}
                                    onChange={ this.onChange }
                                    error={ errors.githubUsername }
                                    info="If you want your latest repos and a
                                    Github Link to show, inclusde your username"
                                />

                                {/* Bio text area */}
                                <TextAreaFieldGroup
                                    placeholder="A short bio of yourself"
                                    name="bio"
                                    value={ this.state.bio }
                                    onChange={ this.onChange }
                                    error={ errors.bio }
                                    info="Tell us a little about yourself"
                                />

                                {/* Social media toggler */}
                                <div className="mb-3">
                                    <button
                                        onClick={this.toggleSocial}
                                        className="btn btn-light">
                                        Social media links
                                    </button>
                                </div>

                                {/* Social media inputs */}
                                {this.state.displaySocialInputs && (
                                    <div>
                                        {/* Facebook */}
                                        <InputGroup
                                            placeholder="Facebook page URL"
                                            name="facebook"
                                            icon="fab fa-facebook"
                                            value={ this.state.facebook }
                                            onChange={this.onChange }
                                            error={ errors.facebook }
                                        />

                                        {/* Twitter */}
                                        <InputGroup
                                            placeholder="Twitter page URL"
                                            name="twitter"
                                            icon="fab fa-twitter"
                                            value={ this.state.twitter }
                                            onChange={ this.onChange }
                                            error={ errors.twitter }
                                        />

                                        {/* LinkedIn */}
                                        <InputGroup
                                            placeholder="LinkedIn page URL"
                                            name="linkedIn"
                                            icon="fab fa-linkedin"
                                            value={ this.state.linkedIn }
                                            onChange={ this.onChange }
                                            error={ errors.linkedIn }
                                        />

                                        {/* Youtube */}
                                        <InputGroup
                                            placeholder="Youtube page URL"
                                            name="youtube"
                                            icon="fab fa-youtube"
                                            value={ this.state.youtube }
                                            onChange={ this.onChange }
                                            error={ errors.youtube }
                                        />

                                        {/* Instagram */}
                                        <InputGroup
                                            placeholder="Instagram page URL"
                                            name="instagram"
                                            icon="fab fa-instagram"
                                            value={ this.state.instagram }
                                            onChange={ this.onChange }
                                            error={ errors.instagram }
                                        />
                                    </div>
                                )}

                                {/* Submit button */}
                                <input type="submit" onSubmit={this.onSubmit} className="btn btn-info btn-block mt-4"/>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    // Component methods
    //////////////////////

    // Called when the user types in one of the fields
    onChange = (e) => {
        // e.target.name = name of html element - e.target.value = value of html element
        this.setState({ [e.target.name]: e.target.value });
    };

    // Called when clicking the submit button
    onSubmit = (e) => {
        e.preventDefault();
        console.log("submitted");

        const profileData = {
            handle: this.state.handle,
            company: this.state.company,
            website: this.state.website,
            location: this.state.location,
            status: this.state.status,
            skills: this.state.skills,
            githubUsername: this.state.githubUsername,
            bio: this.state.bio,
            twitter: this.state.twitter,
            facebook: this.state.facebook,
            linkedIn: this.state.linkedIn,
            youtube: this.state.youtube,
            instagram: this.state.instagram

        };

        this.props.createProfileAction(profileData, this.props.history)
    };

    // Called when clicking the Social Media toggler
    toggleSocial = (e) => {
        e.preventDefault();

        this.setState(prevState => ({
            // Set boolean displaySocialInputs to inverse of its previous state
            displaySocialInputs: !prevState.displaySocialInputs
        }))
    };
}

// Prop types of the component
CreateProfile.propTypes = {
    getCurrentProfile: PropTypes.func.isRequired,
    createCurrentProfile: PropTypes.func.isRequired,
    profile: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired
};

// add the state as a prop
const mapStateToProps = (state) => ({
    profile: state.profile,
    errors: state.errors
});

//////////////
// Exports //
////////////

export default connect(mapStateToProps, { createProfileAction, getCurrentProfile })(withRouter(CreateProfile));