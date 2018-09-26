//////////////
// Imports //
////////////

import React, {Component} from 'react';
import { connect } from 'react-redux';
//import PropTypes from 'prop-types';
import { getCurrentProfile } from "../../redux/actions/profileActions";

////////////////
// Component //
//////////////

class Dashboard extends Component {
    // Lifecycle method of React for when the component receives new props.
    // Gets the current profile when receiving new props
    componentDidMount() {
        this.props.getCurrentProfile();
    }

    render() {
        return (
            <div>

            </div>
        );
    }
}

//////////////
// Exports //
////////////

export default connect(null, { getCurrentProfile })(Dashboard);