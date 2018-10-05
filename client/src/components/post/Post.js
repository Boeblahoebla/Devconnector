//////////////
// Imports //
////////////

import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

// Redux
import { connect } from 'react-redux';
import { getSinglePostAction } from '../../redux/actions/postActions';

// Components
import Spinner from '../common/Spinner';
import PostItem from '../posts/PostItem';
import CommentForm from './CommentForm';
import CommentFeed from './CommentFeed';

////////////////
// Component //
//////////////

class Post extends Component {

    // When the component mounts, call the action to get a single post
    // using the id from the params of the component
    componentDidMount() {
        this.props.getSinglePostAction(this.props.match.params.id);
    }

    render() {

        // Fetch the post & loading boolean from the props
        const { post, loading } = this.props.post;

        // Initialize the postContent as empty
        let postContent;

        // Fill postContent according to data
        if(post === null || loading || Object.keys(post).length === 0) {
            postContent = <Spinner />
        } else {
            postContent = (
                <div>
                    <PostItem post={post} showActions={false}/>
                    <CommentForm postId={post._id} />
                    <CommentFeed postId={post._id} comments={post.comments}/>
                </div>
            )
        }

        return (
            <div className="post">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <Link to="/feed" className="btn btn-light mb-3">
                                Back to feed
                            </Link>

                            {postContent}

                        </div>
                    </div>
                </div>

            </div>
        );
    }
}

// Prop types for the component
Post.propTypes = {
    getSinglePostAction: PropTypes.func.isRequired,
    post: PropTypes.object.isRequired
};


// Map the state to props
const mapStateToProps = (state) => ({
    post: state.post
});

//////////////
// Exports //
////////////

export default connect(mapStateToProps, { getSinglePostAction })(Post);