//////////////
// Imports //
////////////

import React, {Component} from 'react';
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import classnames from 'classnames';
import { Link } from 'react-router-dom';

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
                        <button type="button" className="btn btn-light mr-1">
                            <i className="text-info fas fa-thumbs-up"/>
                            <span className="badge badge-light">{post.likes.length}</span>
                        </button>

                        {/* Dislikes button & counter */}
                        <button type="button" className="btn btn-light mr-1">
                            <i className="text-secondary fas fa-thumbs-down"/>
                        </button>

                        {/* link to the comments */}
                        <Link to={`/post/${post._id}`} className="btn btn-info mr-1">
                            Comments
                        </Link>

                        {/* If the post user is the same as the logged in user
                            display a button to delete its own posts */}
                        {post.user === auth.user.id
                            ? (<button onClick={this.onDeleteClick} type="button" className="btn btn-danger mr-1">
                                    <i className="fas fa-times"/> </button>)
                            : null }
                    </div>
                </div>
            </div>
        );
    }
}

// Proptypes for the component
PostItem.propTypes = {
    post: PropTypes.object.isRequired,
    auth: PropTypes.object.isRequired
};

// Map the state the props
const mapStateToProps = (state) => ({
    auth: state.auth
});

//////////////
// Exports //
////////////

export default connect(mapStateToProps, {})(PostItem);