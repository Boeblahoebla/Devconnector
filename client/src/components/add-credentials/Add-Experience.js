//////////////
// Imports //
////////////

import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

// Redux
import { connect } from 'react-redux';

// Components
import TextFieldGroup from '../common/TextFieldGroup';
import TextAreaFieldGroup from '../common/TextAreaFieldGroup';

// Actions
// import createExperienceAction from '../../redux/actions/experienceActions';

////////////////
// Component //
//////////////

class AddExperience extends Component {

    // Constructor for the class
    constructor(props) {
        super(props);

        this.state = {
            company: '',
            title: '',
            location: '',
            from: '',
            to: '',
            current: false,
            description: '',
            disabled: false,
            errors: {}
        }
    }

    // Rendering of page & functionality
    render() {

        // Pull the errors object from the state
        const { errors } = this.state;

        return (
            <div className="add-experience">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 m-auto">
                            <Link to='/dashboard' className="btn btn-light">Go Back</Link>
                            <h1 className="display-4 text-center">Add experience</h1>
                            <p className="lead text-center">
                                Add any job or position that you have had in the past or present
                            </p>
                            <small className="d-block pb-3">*= required fields</small>
                            <form onSubmit={ this.onSubmit }>

                                {/* Job title text field */}
                                <TextFieldGroup
                                    placeholder="* Title"
                                    name="title"
                                    value={this.state.title}
                                    onChange={ this.onChange }
                                    error={ errors.title }/>

                                {/* Job company text field */}
                                <TextFieldGroup
                                    placeholder="* Company"
                                    name="company"
                                    value={this.state.company}
                                    onChange={ this.onChange }
                                    error={ errors.company }/>

                                {/* Job location text field */}
                                <TextFieldGroup
                                    placeholder="Location"
                                    name="location"
                                    value={this.state.location}
                                    onChange={ this.onChange }
                                    error={ errors.location }/>

                                {/* From-date date field */}
                                <h6>From date</h6>
                                <TextFieldGroup
                                    name="from"
                                    type="date"
                                    value={ this.state.from }
                                    onChange={ this.onChange }
                                    error={ errors.from }/>

                                {/* To-date date field */}
                                <h6>To date</h6>
                                <TextFieldGroup
                                    name="from"
                                    type="date"
                                    value={ this.state.from }
                                    onChange={ this.onChange }
                                    error={ errors.from }
                                    disabled={ this.state.disabled ? 'disabled': '' }
                                    />

                                {/* To-date disabler (toggle) */}
                                <div className="form-check mb-4">
                                    <input type="checkbox" className="form-check-input"
                                        name="current"
                                        value={ this.state.current }
                                        checked={ this.state.current }
                                        onChange={ this.onChecked }
                                        id="current"
                                    />
                                    <label htmlFor="current" className="form-check-label">
                                        current Job
                                    </label>
                                </div>

                                {/* Job description text area field */}
                                <TextAreaFieldGroup
                                    placeholder="Job description"
                                    name="description"
                                    value={ this.state.description }
                                    onChange={ this.onChange }
                                    errors={ errors.description }
                                    info="Tell us about the position"
                                />

                                {/* Submit button */}
                                <input type="submit" value="Submit" className="btn btn-info btn-block mt4"/>
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

    // Called when the user checks the checkbox of "current job"
    onChecked = () => {
        this.setState(prevState => ({
            // Set boolean displaySocialInputs to inverse of its previous state
            disabled: !prevState.disabled,
            current: !prevState.current
        }))
    };

    // Called when the user clicks the submit button
    onSubmit = (e) => {
        e.preventDefault();
        console.log('submitted');
    }
}

//////////////
// Exports //
////////////

// Prop types of the component
AddExperience.propTypes = {
    profile: PropTypes.object.isRequired,
    errors: PropTypes.object
};

// add the state as a prop
const mapStateToProps = (state) => ({
    profile: state.profile,
    errors: state.errors
});

export default connect(mapStateToProps)(withRouter(AddExperience));