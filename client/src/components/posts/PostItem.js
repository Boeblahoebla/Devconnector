//////////////
// Imports //
////////////

import React, {Component} from 'react';
import PropTypes from 'prop-types'
import classnames from 'classnames';
import { Link } from 'react-router-dom';

// Redux
import { connect } from 'react-redux'

import { deletePostAction, addLikeAction, removeLikeAction } from "../../redux/actions/postActions";


////////////////
// Component //
//////////////

class PostItem extends Component {
    render() {

        // Fetch post & auth from the props
        const { post, auth } = this.props;

        // Render of the page & functionality
        return (
            <div className="card card-body mb-3">
                <div className="row">
                    <div className="col-md-2">
                        {/* Clickable Avatar */}
                        <Link to={`/profiles/${post.user.user_id}`}>
                            <img className="rounded-circle d-none d-md-block"
                                 src={post.avatar}
                                 alt=""/>
                        </Link>

                        <br/>

                        {/* Post name */}
                        <p
                            className="text-center">{post.name}
                        </p>
                    </div>
                    <div className="col-md-10">

                        {/* Post text */}
                        <p
                            className="lead">{post.text}
                        </p>

                        {/* Likes button & counter */}
                        <button type="button" onClick={this.onLikeClick.bind(this, post._id)} className="btn btn-light mr-1">

                            <i className={classnames('fas fa-thumbs-up', {
                                'text-info': this.findUserLike(post.likes)})}
                            />

                            <span className="badge badge-light">{post.likes.length}</span>
                        </button>

                        {/* Dislikes button & counter */}
                        <button type="button" onClick={this.onUnlikeClick.bind(this, post._id)} className="btn btn-light mr-1">
                            <i className="text-secondary fas fa-thumbs-down"/>
                        </button>

                        {/* link to the comments */}
                        <Link to={`/post/${post._id}`} className="btn btn-info mr-1">
                            Comments
                        </Link>

                        {/* If the post user is the same as the logged in user
                            display a button to delete its own posts */}
                        {post.user === auth.user.id
                            ? (<button onClick={this.onDeleteClick.bind(this, post._id)} type="button" className="btn btn-danger mr-1">
                                    <i className="fas fa-times"/> </button>)
                            : null }
                    </div>
                </div>
            </div>
        );
    }

    // Component methods
    ///////////////////////

    // Method to delete a post
    onDeleteClick = (id) => {
        this.props.deletePostAction(id);
    };


    // Method to like a post
    onLikeClick = (id) => {
        this.props.addLikeAction(id);
    };


    // Method to unlike a post
    onUnlikeClick = (id) => {
        this.props.removeLikeAction(id);
    };

    // Check to see if a user already liked a post
    findUserLike = (likes) => {
        const { auth } = this.props;
        if(likes.filter(like => like.user === auth.user.id).length > 0) {
            // User has liked it
            return true;
        } else {
            return false;
        }
    }
}

// Proptypes for the component
PostItem.propTypes = {
    addLikeAction: PropTypes.func.isRequired,
    removeLikeAction: PropTypes.func.isRequired,
    deletePostAction: PropTypes.func.isRequired,
    post: PropTypes.object.isRequired,
    auth: PropTypes.object.isRequired
};

// Map the state the props
const mapStateToProps = (state) => ({
    auth: state.auth,
    errors: state.error
});

//////////////
// Exports //
////////////

export default connect(mapStateToProps, { deletePostAction, addLikeAction, removeLikeAction })(PostItem);