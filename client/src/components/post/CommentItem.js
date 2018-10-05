//////////////
// Imports //
////////////

import React, {Component} from 'react';
import PropTypes from 'prop-types';

// Redux
import { connect } from 'react-redux';

// Actions
import { deleteCommentAction } from '../../redux/actions/postActions';

////////////////
// Component //
//////////////

class CommentItem extends Component {
    render() {

        // Pull out data from props
        const { comment, postId, auth } = this.props;

        return (
            <div className="card card-body mb-3">
                <div className="row">
                    <div className="col-md-2">
                        <a href="profile.html">
                            <img className="rounded-circle d-none d-md-block"
                                 src={comment.avatar} alt=""/>
                        </a>
                        <br/>
                        <p className="text-center">{comment.name}</p>
                    </div>
                    <div className="col-md-10">
                        <p className="lead">{comment.text}</p>
                        {/* If the post user is the same as the logged in user
                                display a button to delete its own posts */}
                        {comment.user === auth.user.id
                            ? (<button onClick={this.onDeleteClick.bind(this, postId, comment._id)}
                                       type="button" className="btn btn-danger mr-1">
                                <i className="fas fa-times"/> </button>)
                            : null }
                    </div>
                </div>
            </div>
        );
    }

    // Component methods
    //////////////////////

    // Handle the delete of the comment
    onDeleteClick = (postId, comment_Id) =>{
        this.props.deleteCommentAction(postId, comment_Id);
    }
}

// Proptypes for the component
CommentItem.propTypes = {
    deleteCommentAction: PropTypes.func.isRequired,
    comment: PropTypes.object.isRequired,
    postId: PropTypes.string.isRequired,
    auth: PropTypes.object.isRequired
};

// Map the state to props
const mapStateToProps = state => ({
    auth: state.auth
});

//////////////
// Exports //
////////////

export default connect(mapStateToProps, { deleteCommentAction })(CommentItem);