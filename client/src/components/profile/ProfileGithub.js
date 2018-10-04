//////////////
// Imports //
////////////

import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import Proptypes from 'prop-types';

////////////////
// Component //
//////////////

class ProfileGithub extends Component {

    // Constructor of the component
    constructor(props) {
        super(props);

        this.state = {
            clientId: 'a15dd848402881bb1d3b',
            clientSecret: 'fac0fb6b8a3f7f44d02cebd78f18cbdc7f504791',
            count: 5,
            sort: 'created: asc',
            repos:[]
        }
    }

    // When the component mounts the github api gets called
    componentDidMount() {
        // make request to the github api
        const { username } = this.props;
        const { count, sort, clientId, clientSecret } = this.state;

        fetch(`https://api.github.com/users/${username}/repos?per_page=${count}&sort=${sort}&client_id=${clientId}&client_secret=${clientSecret}`)
            .then(res => res.json())
            .then(data => {
                this.setState({repos: data})

            })
            .catch(err => console.log(err))
    }

    render() {

        // get the repos from the state
        const { repos } = this.state;

        // For each of the github repositories
        // map it to a card holding information about the repo
        const repoItems = repos.map(repo => (
            <div key={repo.id} className="card card-body mb-2">
                <div className="row">
                    <div className="col-md-6">
                        <h5>
                            <Link to={repo.html_url} className="text-info" target="_blank">
                                {repo.name}
                            </Link>
                        </h5>

                        <p>
                            {repo.description}
                        </p>
                    </div>

                    <div className="col-md-6">
                        <span className="badge badge-info mr-1">
                            Stars: {repo.stargazers_count}
                        </span>

                        <span className="badge badge-secundary mr-1">
                            Watchers: {repo.watchers_count}
                        </span>

                        <span className="badge badge-success">
                            Forks: {repo.forks_count}
                        </span>
                    </div>


                </div>
            </div>
        ));

        return (
            <div>
                <hr />
                <h3 className="mb-4">Latest github repos</h3>
                {repoItems}
            </div>
        );
    }
}

// Prop types of the component
ProfileGithub.propTypes = {
    username:Proptypes.string.isRequired
};

//////////////
// Exports //
////////////

export default ProfileGithub;