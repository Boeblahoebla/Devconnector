//////////////
// Imports //
////////////

// React
import React, {Component} from 'react';
import PropTypes from 'prop-types'
import { withRouter } from 'react-router-dom';

// Components
import TextFieldGroup from '../common/TextFieldGroup';

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

    // Lifecycle method to check for an authenticated user
    // when the component has mounted. If authenticated
    // just redirect to the dashboard
    componentDidMount(){
        if (this.props.auth.isAuthenticated) {
            this.props.history.push('/dashboard');
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

                                {/* Input textfields using the TextFieldGroup component */}
                                <TextFieldGroup
                                    name="name"
                                    placeholder="Name"
                                    type="text"
                                    value={ this.state.name }
                                    onChange={ this.onChange }
                                    error={ errors.name } />

                                <TextFieldGroup
                                    name="email"
                                    placeholder="Email address"
                                    type="email"
                                    value={ this.state.email }
                                    onChange={ this.onChange }
                                    error={ errors.email } />

                                <TextFieldGroup
                                    name="password"
                                    placeholder="Password"
                                    type="password"
                                    value={ this.state.password }
                                    onChange={ this.onChange }
                                    error={ errors.password } />

                                <TextFieldGroup
                                    name="password2"
                                    placeholder="Confirm password"
                                    type="password"
                                    value={ this.state.password2 }
                                    onChange={ this.onChange }
                                    error={ errors.password2 } />

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
