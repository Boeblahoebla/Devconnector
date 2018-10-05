//////////////
// Imports //
////////////

import React, {Component} from 'react';
import PropTypes from 'prop-types'

// Redux
import { connect } from 'react-redux';
import { addCommentAction } from '../../redux/actions/postActions';

// Components
import TextAreaFieldGroup from '../common/TextAreaFieldGroup'

////////////////
// Component //
//////////////

class CommentForm extends Component {

    constructor(props) {
        super(props);

        this.state = {
            text: '',
            errors: {}
        }
    }

    // Called when the user types in the text area
    onChange = (e) => {
        this.setState({[e.target.name]: e.target.value})
    };

    // Called when the user clicks the submit button
    onSubmit = (e) => {
        e.preventDefault();

        // Fetch the authenticated user creating the post
        const { user } = this.props.auth;
        const { postId } = this.props;

        // Create a new post object using the state & the fetched user information
        const newComment = {
            text: this.state.text,
            user: user._id,
            name: user.name,
            avatar: user.avatar,
        };

        // Fire up the addPostAction action to add the post to the DB
        this.props.addCommentAction(postId, newComment);

        // Clear the text field again
        this.setState({ text: '' });
    };

    // called with the component receives new props
    componentWillReceiveProps(nextProps) {
        if(nextProps.errors) {
            this.setState({errors: nextProps.errors})
        }
    }

    render() {

        // Fetch the errors from the state
        const { errors } = this.state;

        return (
            <div className="post-form mb-3">
                <div className="card card-info">
                    <div className="card-header bg-info text-white">
                        Make a comment...
                    </div>
                    <div className="card-body">
                        <form onSubmit={this.onSubmit}>
                            <div className="form-group">
                                <TextAreaFieldGroup
                                    placeholder="Replyl to post"
                                    name="text"
                                    value={this.state.text}
                                    onChange={this.onChange}
                                    error={errors.text}
                                />
                            </div>
                            <button type="submit" className="btn btn-dark">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

// Prop types for the component
CommentForm.propTypes = {
    addCommentAction: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    postId: PropTypes.string.isRequired,
    errors: PropTypes.object
};

// Map the state to props
const mapStateToProps = state => ({
    auth: state.auth,
    errors: state.errors
});

//////////////
// Exports //
////////////

export default connect(mapStateToProps, { addCommentAction })(CommentForm);