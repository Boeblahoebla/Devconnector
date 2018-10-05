//////////////
// Imports //
////////////

// Dependencies
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// Components
import Navbar from './layout/Navbar';
import Footer from './layout/Footer';
import Landing from './layout/Landing';

import Register from './auth/Register';
import Login from './auth/Login';

import Dashboard from './dashboard/Dashboard';
import CreateProfile from './create-profile/CreateProfile';
import EditProfile from './edit-profile/Edit-Profile';
import Profiles from './profiles/Profiles';
import Profile from './profile/Profile';
import Posts from './posts/Posts';
import Post from './post/Post';

import AddExperience from '../components/add-credentials/Add-Experience';
import AddEducation from '../components/add-credentials/Add-Education';

import NotFound from '../components/not-found/NotFound';

import PrivateRoute from'./common/PrivateRoute';

// Redux
import { Provider } from 'react-redux';
import fullApplicationStore from '../redux/store';

import jwt_decode from 'jwt-decode';
import setAuthToken from '../utils/setAuthToken';
import { setCurrentUser } from "../redux/actions/authActions";
import { logOutUserAction } from "../redux/actions/authActions";
import { clearCurrentProfileAction } from "../redux/actions/profileActions";

// Styling
import '../styles/App.css';

/////////////////
// Components //
///////////////

// Check for token if page loads
if (localStorage.jwtToken) {
    // Set the authToken header auth
    setAuthToken(localStorage.jwtToken);
    // Decode token & get user info + expiration
    const decoded = jwt_decode(localStorage.jwtToken);
    // Set user and isAuthenticated
    fullApplicationStore.dispatch(setCurrentUser(decoded));

    // Check for expired token
    const currentTime = Date.now() / 1000;
    if (decoded.exp < currentTime) {
        // Logout the user
        fullApplicationStore.dispatch(logOutUserAction());

        // Clear the current profile

        fullApplicationStore.dispatch(clearCurrentProfileAction());

        window.location.href = '/login';
    }
}

class App extends Component {
    render() {
        return (
            // everything inside the Provider tag has access to the
            // Application state- storage of Redux
            <Provider store={ fullApplicationStore } >
                <Router>
                    <div className="App">
                        <Navbar />
                        <Route exact path="/" component={ Landing } />

                        <div className="container">
                            <Route exact path="/register" component={ Register } />
                            <Route exact path="/login" component={ Login } />
                            <Route exact path="/profiles" component={ Profiles } />
                            <Route exact path="/profile/:handle" component={ Profile } />
                            <Switch>
                                <PrivateRoute exact path="/dashboard" component={ Dashboard } />
                            </Switch>
                            <Switch>
                                <PrivateRoute exact path="/create-profile" component={ CreateProfile } />
                            </Switch>
                            <Switch>
                                <PrivateRoute exact path="/edit-profile" component={ EditProfile } />
                            </Switch>
                            <Switch>
                                <PrivateRoute exact path="/add-experience" component={ AddExperience } />
                            </Switch>
                            <Switch>
                                <PrivateRoute exact path="/add-education" component={ AddEducation } />
                            </Switch>
                            <Switch>
                                <PrivateRoute exact path="/feed" component={ Posts } />
                            </Switch>
                            <Switch>
                                <PrivateRoute exact path="/post/:id" component={ Post } />
                            </Switch>
                            <Route exact path="/not-found" component={ NotFound } />
                        </div>

                        <Footer />
                    </div>
                </Router>
            </Provider>
        );
    }
}

//////////////
// Exports //
////////////

export default App;
