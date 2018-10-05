//////////////
// Imports //
////////////

import React, {Component} from 'react';
import PropTypes from 'prop-types';

import PostItem from './PostItem';

////////////////
// Component //
//////////////

class PostFeed extends Component {
    render() {

        // Fetch the posts out of the props
        const { posts } = this.props;

        // Map through the posts and create a PostItem component for each of them
        let postFeed = posts.map(post => <PostItem key={post._id} post={post}/>);

        return (
            <div>
                {postFeed}
            </div>
        );
    }
}

PostFeed.propTypes = ({
    posts: PropTypes.array.isRequired
});

//////////////
// Exports //
////////////

export default PostFeed;