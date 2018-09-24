//////////////
// Imports //
////////////

// React
import React, {Component} from 'react';
import PropTypes from 'prop-types'
import { withRouter } from 'react-router-dom';
import classnames from 'classnames';

// Redux dependency
import { connect } from 'react-redux';

// Redux actions
import { registerUserAction } from "../../redux/actions/authActions";

////////////////
// Component //
//////////////

class Register extends Component {
    // Add a constructor to add a component state
    constructor(){
        super();
        this.state = {
            name: '',
            email: '',
            password: '',
            password2: '',
            errors: {}
        }
    }

    // Lifecycle method of React for when the component receives new props,
    // Check to see if there are errors. If there are errors,
    // add the errors to the component state
    componentWillReceiveProps(nextProps) {
        if (nextProps.errors) {
            this.setState({ errors: nextProps.errors })
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
    onSubmit = (e) => {
        e.preventDefault();

        // Create a user object having the values read from the filled in state
        const newUser = {
            name: this.state.name,
            email: this.state.email,
            password: this.state.password,
            password2: this.state.password2
        };

        // Trigger the registerUserAction as a prop with the data in the newUser object
        // this.props.history allows redirection from within the action
        // because of the withRouter argument at the bottom of this file
        this.props.registerUserAction(newUser, this.props.history);
    };

    // Set the values of the form inputs to the state attributes
    // eg. In the input for the name field ==> value={ this.state.name }
    render() {
        // Pull the errors object from the state
        const { errors } = this.state;

        // the classnames of the inputfields now use the npm package classnames
        // css className has "form-control and form-control-lg" always active by the 1st argument between ' '
        // and an optional when the input is not valid as the second argument ' ' which is set to the errors
        // we get through the server side validation in express & validator

        // Bootstrap: http://getbootstrap.com/docs/4.1/components/forms/#validation
        // Classnames: https://github.com/JedWatson/classnames#readme

        return (
            <div className="register">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 m-auto">
                            <h1 className="display-4 text-center">Sign Up</h1>
                            <p className="lead text-center">Create your DevConnector account</p>

                            {/* On submit, fire up the onSubmit method */}
                            <form noValidate onSubmit={ this.onSubmit }>
                                <div className="form-group">

                                    {/* CSS classnames use the classnames npm package */}
                                    <input
                                        className={classnames('form-control form-control-lg', {
                                            'is-invalid': errors.name
                                        })}

                                        type="text"
                                        placeholder="Name"
                                        name="name"
                                        value={ this.state.name }
                                        onChange={ this.onChange }
                                    />

                                    {/* provide the error messages under the input that is not validated */}
                                    {errors.name && (<div className="invalid-feedback">{errors.name}</div>)}
                                </div>
                                <div className="form-group">

                                    {/* CSS classnames use the classnames npm package */}
                                    <input
                                        className={classnames('form-control form-control-lg', {
                                            'is-invalid': errors.email
                                        })}

                                        type="email"
                                        placeholder="Email Address"
                                        name="email"
                                        value={ this.state.email }
                                        onChange={ this.onChange }
                                    />
                                    <small className="form-text text-muted">This site uses Gravatar so if you want a
                                        profile image, use a Gravatar email
                                    </small>

                                    {/* provide the error messages under the input that is not validated */}
                                    {errors.email && (<div className="invalid-feedback">{errors.email}</div>)}

                                </div>
                                <div className="form-group">

                                    {/* CSS classnames use the classnames npm package */}
                                    <input
                                        className={classnames('form-control form-control-lg', {
                                            'is-invalid': errors.password
                                        })}

                                        type="password"
                                        placeholder="Password"
                                        name="password"
                                        value={ this.state.password }
                                        onChange={ this.onChange }
                                    />

                                    {/* provide the error messages under the input that is not validated */}
                                    {errors.password && (<div className="invalid-feedback">{errors.password}</div>)}

                                </div>
                                <div className="form-group">

                                    {/* CSS classnames use the classnames npm package */}
                                    <input
                                        className={classnames('form-control form-control-lg', {
                                            'is-invalid': errors.password2
                                        })}

                                        type="password"
                                        placeholder="Confirm Password"
                                        name="password2"
                                        value={ this.state.password2 }
                                        onChange={ this.onChange }
                                    />
                                    {/* provide the error messages under the input that is not validated */}
                                    {errors.password2 && (<div className="invalid-feedback">{errors.password2}</div>)}

                                </div>
                                <input type="submit" className="btn btn-info btn-block mt-4"/>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

/////////////////////
// Helper methods //
///////////////////

// Set the prop types for this component
Register.propTypes = {
    registerUserAction: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired
};

// add the state(s) as a prop
const mapStateToProps = (state) => ({
    // Everything after the ':'
    // comes from the reducers listed in the combineReducers method
    // in the file ./client/src/redux/reducers/index.js
    auth: state.auth,
    errors: state.errors
});

//////////////
// Exports //
////////////

export default connect(mapStateToProps, { registerUserAction })(withRouter(Register));
