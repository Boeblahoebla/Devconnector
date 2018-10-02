//////////////
// Imports //
////////////

import React, {Component} from 'react';
import { Link, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types'

// Redux
import { connect } from 'react-redux';

// Components
import TextFieldGroup from '../common/TextFieldGroup';
import TextAreaFieldGroup from '../common/TextAreaFieldGroup';

// Actions
import { addEducationAction } from '../../redux/actions/profileActions';

////////////////
// Component //
//////////////

class AddEducation extends Component {

    // Constructor of the class
    constructor(props) {
        super(props);

        this.state = {
            school: '',
            degree: '',
            fieldOfStudy: '',
            from: '',
            to: '',
            current: false,
            description: '',
            disabled: false,
            errors: {}
        }
    }

    // Lifecycle method of React for when the component receives new props,
    // Check to see if there are errors. If there are errors,
    // add the errors to the component state and render again
    componentWillReceiveProps(nextProps) {
        if (nextProps.errors) {
            this.setState({ errors: nextProps.errors });
        }
    }

    // Rendering of page & functionality
    render() {

        // fetch the errors from the state
        const { errors } = this.state;

        return (
            <div className="add-education">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 m-auto">
                            <Link to='/dashboard' className='btn btn-light'>Go back</Link>
                            <h1 className="display-4 text-center">Add Education</h1>
                            <p className="lead text-center">
                                Add any education or course that you have attended or you are currently attending
                            </p>
                            <small className="d-block pb-3">* = required</small>
                            <form onSubmit={ this.onSubmit }>

                                {/* Degree text field */}
                                <TextFieldGroup
                                    name='degree'
                                    placeholder='* Degree'
                                    value={ this.state.degree }
                                    onChange={ this.onChange }
                                    error={ errors.degree }/>

                                {/* Field of study text field */}
                                <TextFieldGroup
                                    name='fieldOfStudy'
                                    placeholder='* Field of study'
                                    value={ this.state.fieldOfStudy }
                                    onChange={ this.onChange }
                                    error={ errors.fieldOfStudy }/>

                                {/* Field of study text field */}
                                <TextFieldGroup
                                    name='school'
                                    placeholder='* School'
                                    value={ this.state.school }
                                    onChange={ this.onChange }
                                    error={ errors.school }/>

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
                                    name="to"
                                    type="date"
                                    value={ this.state.to }
                                    onChange={ this.onChange }
                                    error={ errors.to }
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
                                        current course
                                    </label>
                                </div>

                                {/* Job description text area field */}
                                <TextAreaFieldGroup
                                    placeholder="Course description"
                                    name="description"
                                    value={ this.state.description }
                                    onChange={ this.onChange }
                                    errors={ errors.description }
                                    info="Tell us something more about the course or education"
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

    // Called when the user clicks the submit button on the form
    onSubmit = (e) => {
        e.preventDefault();

        // Gather education data
        const eduData = {
            school: this.state.school,
            degree: this.state.degree,
            fieldOfStudy: this.state.fieldOfStudy,
            from: this.state.from,
            to: this.state.to,
            current: this.state.current,
            description: this.state.description
        };

        // Trigger the action, using the Education data
        this.props.addEducationAction(eduData, this.props.history);

        console.log('submitted');
    }
}

// Prop types of the component
AddEducation.propTypes = {
    addEducationAction: PropTypes.func.isRequired,
    profile: PropTypes.object.isRequired,
    errors: PropTypes.object
};

// add the state as a prop
const mapStateToProps = (state) => ({
    profile: state.profile,
    errors: state.errors
});

//////////////
// Exports //
////////////

export default connect(mapStateToProps, { addEducationAction })(withRouter(AddEducation));