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

    // Rendering of page & functionality
    render() {

        // Pull the errors object from the state
        const { errors } = this.state;

        // Select options for status
        const options = [
            { label: '* Select professional status', value: '0'},
            { label: 'Developer', value: 'Developer'},
            { label: 'Junior Developer', value: 'Junior Developer'},
            { label: 'Senior Developer', value: 'Senior Developer'},
            { label: 'Manager', value: 'Manager' },
            { label: 'Student or Learning', value: 'Student or Learning' },
            { label: 'Instructor or Teacher', value: 'Instructor or Teacher' },
            { label: 'Intern', value: "Intern" },
            { label: 'Other', value: "Other"}
        ];

        // Page content
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
                            <form onSubmit={this.onSubmit}>

                                {/* Profile handle text field */}
                                <TextFieldGroup
                                    placeholder="* Profile Handle"
                                    name="handle"
                                    value={ this.state.handle }
                                    onChange={ this.onChange }
                                    errors={ errors.handle }
                                    info="A unique handle for your profile URL: your full name,
                                    company name, etc..."
                                />

                                {/* Status select field */}
                                <SelectListGroup
                                    placeholder="Status"
                                    name="status"
                                    value={ this.state.status }
                                    onChange={ this.onChange }
                                    options={options}
                                    error={ errors.status }
                                    info="Give us an idea of where you are at in your career"
                                />

                                {/* Company text field */}
                                <TextFieldGroup
                                    placeholder="Company"
                                    name="company"
                                    value={ this.state.company }
                                    onChange={ this.onChange }
                                    errors={ errors.company }
                                    info="Could be your own company or the one you currently work for"
                                />

                                {/* Website text field */}
                                <TextFieldGroup
                                    placeholder="Website"
                                    name="website"
                                    value={ this.state.website }
                                    onChange= {this.onChange }
                                    errors={ errors.website }
                                    info="Could be your own website or the one of your company"
                                />

                                {/* Location text field */}
                                <TextFieldGroup
                                    placeholder="Location"
                                    name="location"
                                    value={ this.state.location }
                                    onChange={ this.onChange }
                                    errors={ errors.location }
                                    info="Postcode & City suggested (eg. 9900 Eeklo)"
                                />

                                {/* Skills text field */}
                                <TextFieldGroup
                                    placeholder="* Skills"
                                    name="skills"
                                    value={ this.state.skills }
                                    onChange={ this.onChange }
                                    errors={ errors.skills }
                                    info="Please use comma separated values (eg. HTML, CSS, Javascript, Python)"
                                />

                                {/* Github username text field */}
                                <TextFieldGroup
                                    placeholder="Github username"
                                    name="githubUsername"
                                    value={this.state.githubUsername}
                                    onChange={ this.onChange }
                                    errors={ errors.githubUsername }
                                    info="If you want your latest repos and a
                                    Github Link to show, inclusde your username"
                                />

                                {/* Bio text area */}
                                <TextAreaFieldGroup
                                    placeholder="A short bio of yourself"
                                    name="bio"
                                    value={ this.state.bio }
                                    onChange={ this.onChange }
                                    errors={ errors.bio }
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
    };

    // Called when clicking the Social Media toggler
    toggleSocial = () => {
        this.setState(prevState => ({
            // Set boolean displaySocialInputs to inverse of its previous state
            displaySocialInputs: !prevState.displaySocialInputs
        }))
    };
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