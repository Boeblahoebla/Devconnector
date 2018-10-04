//////////////
// Imports //
////////////

import React, {Component} from 'react';
import PropTypes from 'prop-types';

// Redux
import { connect } from 'react-redux'

// Components
import PostForm from './PostForm';
import Spinner from '../common/Spinner';


////////////////
// Component //
//////////////

class Posts extends Component {
    render() {
        return (
            <div className="feed">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <PostForm />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

// Prop types for the component
Posts.propTypes = {

};

// Map the state to props
const mapStateToProps = (state) => ({

});

//////////////
// Exports //
////////////

export default connect(mapStateToProps, {})(Posts);