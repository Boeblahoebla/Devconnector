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

    // Method which is called when the user types in one of the fields
    // e.target.name points to the name that is given to the input field in the JSX below
    // e.target.value points to the current value typed in each of the text fields
    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    };

    // Method which get called when the user submits the typed in values
    // when clicking on the submit button
    // This is made available by the onSubmit={ this.onSubmit } attribute in the form tag below

    // Triggered when the user clicks the submit button
    onSubmit = (e) => {
        e.preventDefault()
    };

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

                                {/* Location text field, accepts an array */}
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

                                <div className="mb-3">
                                    <button onClick={() =>
                                        this.setState(prevState => ({
                                            displaySocialInputs: !prevState.displaySocialInputs
                                        }))
                                    } className="btn btn-light">Social media links</button>
                                </div>

                            </form>

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