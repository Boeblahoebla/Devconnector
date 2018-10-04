//////////////
// Imports //
////////////

import React, {Component} from 'react';
import PropTypes from 'prop-types';

// Redux
import { connect } from 'react-redux';
import { deleteExperienceAction } from '../../redux/actions/profileActions';

// Misc
import Moment from 'react-moment';

////////////////
// Component //
//////////////

class Experience extends Component {
    render() {

        // Create an experience row for each education in the user's profile
        const experience = this.props.experience.map(exp => (
            <tr key={exp._id}>
                <td>{exp.title}</td>
                <td>{exp.company}</td>

                <td>
                    <Moment format="DD/MM/YYYY">{ exp.from }</Moment> - {exp.to === null
                        ? (' Now')
                        : <Moment format="DD/MM/YYYY">{ exp.from }</Moment>
                    }
                </td>
                <td><button onClick={this.onDeleteClick.bind(this, exp._id)} className="btn btn-danger">Delete</button></td>
            </tr>
        ));

        return (
            <div>
                <h4 className="mb-4">Experience Credentials</h4>
                <table className="table">
                    <thead>
                    <tr>
                        <th>Title</th>
                        <th>Company</th>
                        <th>Years</th>
                        <th />
                    </tr>
                    </thead>
                    <tbody>
                        { experience }
                    </tbody>
                </table>
            </div>
        );
    }

    // Component methods
    //////////////////////

    // Called when the user clicks the delete button of the credential
    onDeleteClick(id) {
        this.props.deleteExperience(id);
        console.log(`${id} to erase`);
    }
}

// Component Prop types
Experience.propTypes = {
    deleteExperience: PropTypes.func.isRequired
};

//////////////
// Exports //
////////////

export default connect(null,{ deleteExperience: deleteExperienceAction })(Experience);