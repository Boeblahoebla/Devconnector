//////////////
// Imports //
////////////

import React, {Component} from 'react';
import PropTypes from 'prop-types'

// Redux
import { connect } from 'react-redux';
import { deleteEducation } from '../../redux/actions/profileActions';

// Misc
import Moment from 'react-moment';

////////////////
// Component //
//////////////

class Education extends Component {
    render() {

        // Create an education row for each education in the user's profile
        const education = this.props.education.map(edu => (
            <tr key={edu._id}>
                <td>{edu.degree}</td>
                <td>{edu.school}</td>

                <td>
                    <Moment format="DD/MM/YYYY">{ edu.from }</Moment> - {edu.to === null
                        ? (' Now')
                        :  <Moment format="DD/MM/YYYY">{ edu.to }</Moment>
                    }
                </td>
                <td><button onClick={this.onDeleteClick.bind(this, edu._id)} className="btn btn-danger">Delete</button></td>
            </tr>
        ));

        return (
            <div>
                <h4 className="mb-4">Education Credentials</h4>
                <table className="table">
                    <thead>
                    <tr>
                        <th>Degree</th>
                        <th>School</th>
                        <th>Years</th>
                        <th/>
                    </tr>
                    </thead>
                    <tbody>
                        { education }
                    </tbody>
                </table>
            </div>
        );
    }

    // Component methods
    //////////////////////

    // Called when the user clicks the delete button of the credential
    onDeleteClick(id) {
        this.props.deleteEducation(id);
        console.log(`${id} to erase`);
    }
}

// Component Prop types
Education.propTypes = {
    deleteEducation: PropTypes.func.isRequired
};

//////////////
// Exports //
////////////

export default connect(null, { deleteEducation })(Education);