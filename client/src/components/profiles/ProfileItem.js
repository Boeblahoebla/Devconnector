//////////////
// Imports //
////////////

import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import isEmpty from '../../validation/is-empty';

////////////////
// Component //
//////////////

class ProfileItem extends Component {
    render() {
        // the profile comes as a prop passed from
        // the parent component (Profiles.js line 46)
        const { profile } = this.props;

        return (
            <div className="card card-body bg-light mb-3">
                <div className="row">

                    {/* Profile avatar */}
                    <div className="col-2">
                        <img src={ profile.user.avatar } alt="" className="rounded-circle"/>
                    </div>

                    {/* Profile avatar */}
                    <div className="col-lg-6 col-md-4 col-8">
                        <h3>{ profile.user.name }</h3>

                        {/* Display status and company if available */}
                        <p>{ profile.status } { isEmpty(profile.company)
                                ? null
                                : (<span>at { profile.company }</span>) }
                        </p>

                        {/* Display location of company if available */}
                        <p>{ isEmpty(profile.location) ? (<span>Unknown</span>) : (<span>{ profile.location }</span>) }</p>

                        {/* Button to go to the detailed profile */}
                        <Link to={`/profile/${profile.handle}`} className="btn btn-info">
                            View Profile
                        </Link>
                    </div>

                    {/* List of skills */}
                    <div className="col-md-4 d-none d-md-block">
                        <h4>Skill Set</h4>
                        <ul className="list-group">
                            { profile.skills.slice(0, 3).map((skill, index) => (
                                <li key={index} className="list-group-item">
                                    <i className="fa fa-check pr-1" />
                                    { skill }
                                </li>
                            )) }
                        </ul>
                    </div>
                </div>

            </div>
        );
    }
}

// Prop types for the component
ProfileItem.propTypes = {
    profile: PropTypes.object.isRequired
};

//////////////
// Exports //
////////////

export default ProfileItem;