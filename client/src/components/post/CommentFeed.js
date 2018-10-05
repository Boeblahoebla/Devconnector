//////////////
// Imports //
////////////

import React, {Component} from 'react';
import PropTypes from 'prop-types';

// Components
import CommentItem from './CommentItem';

////////////////
// Component //
//////////////

class CommentFeed extends Component {
    render() {

        // fetch the comments & postId from the props
        const { comments, postId } = this.props;

        // Map through the comments array and create a CommentItem for each comment
        return comments.map(comment => (
            <CommentItem key={comment._id} comment={comment} postId={postId} />
        ));
    }
}

CommentFeed.propTypes = ({
    comments: PropTypes.array.isRequired,
    postId: PropTypes.string.isRequired
});


//////////////
// Exports //
////////////

export default CommentFeed;
