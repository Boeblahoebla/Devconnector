//////////////
// Imports //
////////////

import React, {Component} from 'react';
import PropTypes from 'prop-types';

// Redux
import { connect } from 'react-redux'
import { getPostsAction } from "../../redux/actions/postActions";

// Components
import PostForm from './PostForm';
import Spinner from '../common/Spinner';
import PostFeed from './PostFeed';


////////////////
// Component //
//////////////

class Posts extends Component {

    // Called when the component mounts
    componentDidMount() {
        this.props.getPostsAction();
    }

    render() {

        const { posts, loading } = this.props.post;

        let PostContent;

        if(posts === null || loading) {
            PostContent = <Spinner />
        } else {
            PostContent = <PostFeed posts={posts} />
        }


        return (
            <div className="feed">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <PostForm />
                            {PostContent}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

// Prop types for the component
Posts.propTypes = {
    getPostsAction: PropTypes.func.isRequired,
    post: PropTypes.object.isRequired
};

// Map the state to props
const mapStateToProps = (state) => ({
    post: state.post
});

//////////////
// Exports //
////////////

export default connect(mapStateToProps, { getPostsAction })(Posts);