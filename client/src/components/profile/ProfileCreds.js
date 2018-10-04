//////////////
// Imports //
////////////

import React, {Component} from 'react';
import Moment from 'react-moment';

////////////////
// Component //
//////////////

class ProfileCreds extends Component {
    render() {

        // Get the education & experience from the props
        const { experience, education } = this.props;

        // Map through the experience items and create an LI for each
        const expItems = experience.map((exp) => (
            <li key={exp._id} className="list-group-item">
                {/* Company */}
                <h4>
                    { exp.company }
                </h4>

                {/* From & to date */}
                <p>
                    <Moment format={"DD/MM/YYYY"}>{exp.from}</Moment>
                    {exp.to === null
                        ? (' - Now')
                        : (<Moment format={"DD/MM/YYYY"}>{exp.to}</Moment>)
                    }
                </p>

                {/* Position */}
                <p>
                    <strong>Position:</strong> {exp.title}
                </p>

                {/* Location if available */}
                <p>
                    {exp.location === ''
                        ? null
                        : (<span><strong>Location: </strong>{exp.location}</span>)}
                </p>

                {/* Description if available */}
                <p>
                    {exp.description === ''
                        ? null
                        : (<span><strong>Description: </strong>{exp.description}</span>)}
                </p>
            </li>
        ));


        // Map through the education items and create an LI for each
        const eduItems = education.map((edu) => (
            <li key={edu._id} className="list-group-item">
                {/* School */}
                <h4>
                    { edu.school }
                </h4>

                {/* From & to date */}
                <p>
                    <Moment format={"DD/MM/YYYY"}>{edu.from}</Moment>
                    {edu.to === null
                        ? (' - Now')
                        : (<span> - <Moment format={"DD/MM/YYYY"}>{edu.to}</Moment></span>)
                    }
                </p>

                {/* Degree */}
                <p>
                    <strong>Degree:</strong> {edu.degree}
                </p>

                {/* Field of study */}
                <p>
                    <strong>Field of study: </strong>{edu.fieldOfStudy}
                </p>

                {/* Description if available */}
                <p>
                    {edu.description === ''
                        ? null
                        : (<span><strong>Description: </strong>{edu.description}</span>)}
                </p>
            </li>
        ));

        return (
            <div className="row">
                {/* Column for Experience */}
                <div className="col-md-6">
                    <h3 className="text-center text-info">Experience</h3>
                    {expItems.length > 0
                        ? <ul className="list-group">{ expItems }</ul>
                        : (<p className="text-center">No experience listed</p>)
                    }
                </div>

                {/* Column for education */}
                <div className="col-md-6">
                    <h3 className="text-center text-info">Education</h3>
                    {eduItems.length > 0
                        ? <ul className="list-group">{ eduItems }</ul>
                        : (<p className="text-center">No education listed</p>)
                    }
                </div>
            </div>
        );
    }
}

//////////////
// Exports //
////////////

export default ProfileCreds;