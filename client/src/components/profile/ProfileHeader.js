//////////////
// Imports //
////////////

import React, {Component} from 'react';
import isEmpty from '../../validation/is-empty';

////////////////
// Component //
//////////////

class ProfileHeader extends Component {
    render() {

        // Get the profile from the props
        const { profile } = this.props;

        return (
            <div className="row">
                <div className="col-md-12">
                    <div className="card card-body bg-info text-white mb-3">
                        <div className="row">
                            <div className="col-4 col-md-3 m-auto">

                                {/* Profile avatar */}
                                <img className="rounded-circle" src={profile.user.avatar} alt=""/>
                            </div>
                        </div>
                        <div className="text-center">

                            {/* Profile name */}
                            <h1 className="display-4 text-center">{profile.user.name}</h1>

                            {/* Profile status (& company if available) */}
                            <p className="lead text-center">{profile.status} {isEmpty(profile.company) ? null : (
                                <span>
                                    at {profile.company}
                                </span>)}
                            </p>

                            {/* Profile location if available */}
                            {isEmpty(profile.location) ? null : (
                                <p>
                                    at {profile.location}
                                </p>
                            )}

                            {/* Website & social media links if available */}
                            <p>
                                {/* Show website link if available */}
                                {isEmpty(profile.website) ? null : (
                                <a
                                    className="text-white p-2"
                                    href={ profile.website }
                                    target="_blank" >
                                    <i className="fas fa-globe fa-2x"/>
                                </a>
                                )}

                                {/* Show facebook social if available */}
                                {isEmpty(profile.social.facebook) ? null : (
                                    <a
                                        className="text-white p-2"
                                        href={ profile.social.facebook }
                                        target="_blank" >
                                        <i className="fab fa-facebook fa-2x"/>
                                    </a>
                                )}

                                {/* Show twitter social if available */}
                                {isEmpty(profile.social.twitter) ? null : (
                                    <a
                                        className="text-white p-2"
                                        href={ profile.social.twitter }
                                        target="_blank" >
                                        <i className="fab fa-twitter fa-2x"/>
                                    </a>
                                )}

                                {/* Show linkedIn social if available */}
                                {isEmpty(profile.social.linkedIn) ? null : (
                                    <a
                                        className="text-white p-2"
                                        href={ profile.social.linkedIn }
                                        target="_blank" >
                                        <i className="fab fa-linkedin fa-2x"/>
                                    </a>
                                )}

                                {/* Show youtube social if available */}
                                {isEmpty(profile.social.youtube) ? null : (
                                    <a
                                        className="text-white p-2"
                                        href={ profile.social.youtube }
                                        target="_blank" >
                                        <i className="fab fa-youtube fa-2x"></i>
                                    </a>
                                )}

                                {/* Show instagram social if available */}
                                {isEmpty(profile.social.instagram) ? null : (
                                    <a
                                        className="text-white p-2"
                                        href={ profile.social.youtube }
                                        target="_blank" >
                                        <i className="fab fa-instagram fa-2x"></i>
                                    </a>
                                )}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

//////////////
// Exports //
////////////

export default ProfileHeader;